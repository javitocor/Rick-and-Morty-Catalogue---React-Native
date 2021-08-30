/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,  
  ActivityIndicator,
  ImageBackground,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {SingleCall} from '../helpers/APIcalls';
import getKeys from '../helpers/getKeys';
import objectChecker from '../helpers/objectChecker';
import checkKey from '../helpers/checkKey';
import KeyLink from '../components/KeyLink';
import KeySingle from '../components/KeySingle';
import HeaderItem from '../components/HeaderItem';
import generateKey from '../helpers/generateKey';
import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginBottom: 10
  },
  bgimage: {
    flex: 1,
    width: screen.width*1,
    height: screen.height * 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  waiting:{
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 100,
  },
  content:{
    width: screen.width*0.85
  },
});


const CharacterDetail = (props) => {
  const [filteredItem, setFilteredItem] = useState(null);
  const [keys, setKeys] = useState([]);
  const [info,setInfo] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const {navigation, route, getSingleCharacter} = props;
  const { id } = route.params;
  
  useEffect(() => {
    (async () => {
      try {
       setIsPending(true);
       const data = await getSingleCharacter('character', id);
       setInfo(data)
       const keysNeeded = getKeys(data);
       setKeys(keysNeeded);
       const filtered = await objectChecker(data, keysNeeded);
       setFilteredItem(filtered);
       setIsPending(false);
      } catch (error) {
        console.log(error)
      }           
    })();  
  },[id]);  
  
  return (    
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <ImageBackground style={styles.bgimage} source={require('../assets/images/background4.jpg')}>
        {isPending ? (
          <ActivityIndicator color={colors.yellow} size="large" style={styles.waiting} />
          ):(
            <View style={styles.content}>              
              <FlatList 
                data={keys}
                keyExtractor={item =>generateKey(item)}
                ListHeaderComponent={<HeaderItem name={info.name} image={info.image} />}
                renderItem={({ item, index }) => {
                  return (
                    (checkKey(item, filteredItem[1]) 
                      ? <KeyLink key={generateKey('link')} info={info} value={item} object={filteredItem[0]} navigation={navigation} />
                      : <KeySingle key={generateKey('4')} item={info} value={item} />
                    )
                  )
              }}
              />
            </View>
          )}
      </ImageBackground>
    </View>
  );
};

CharacterDetail.propTypes = {
  characters: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    character: PropTypes.object,
  }).isRequired,
  getSingleCharacter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  characters: {
    error: state.characters.error,
    character: state.characters.character,
    pending: state.characters.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSingleCharacter: SingleCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);