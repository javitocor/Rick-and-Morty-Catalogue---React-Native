/* eslint-disable react/forbid-prop-types */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  FlatList,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HeaderList from '../components/HeaderList';
import FooterList from '../components/FooterList';
import CharacterDisplay from '../components/CharacterDisplay';
import {AllCall, UpdateCall} from '../helpers/APIcalls';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
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
  content: {
    width: screen.width*0.85
  }
});

const Characters = (props) => {
  const {getAllCharacters, navigation, updateCharacters} = props;
  const {charactersList} = props.characters;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCharacters('character');
    setLoading(false);
  }, []);


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <ImageBackground source={require('../assets/images/background4.jpg')} resizeMode="cover" style={styles.bgimage}>
        {loading ? (
          <ActivityIndicator color={colors.yellow} size="large" style={styles.waiting} />
          ):(
            <View style={styles.content}>
              <FlatList                
                data={charactersList}
                renderItem={({ item }) => (<CharacterDisplay key={item} item={item} onButtonPress={()=>{navigation.navigate('CharacterDetail', {title: item.name, id: item.id})}} />)}
                keyExtractor={item => item.url}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={<HeaderList category="CHARACTERS" />}
                ListFooterComponent={props.characters.next !== null ? <FooterList loading={props.characters.pending} onButtonPress={async () => updateCharacters(props.characters.next)} /> : <></>}                
              />
            </View>
        )}
      </ImageBackground>
    </View>
  );
};

Characters.propTypes = {
  characters: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    next: PropTypes.string,
    count: PropTypes.number,
    pages: PropTypes.number,
    charactersList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getAllCharacters: PropTypes.func.isRequired,
  updateCharacters: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  characters: {
    error: state.characters.error,
    next: state.characters.next,
    count: state.characters.count,
    pages: state.characters.pages,
    charactersList: state.characters.charactersList,
    pending: state.characters.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllCharacters: AllCall,
  updateCharacters: UpdateCall
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Characters);