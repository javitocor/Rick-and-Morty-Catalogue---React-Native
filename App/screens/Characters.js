/* eslint-disable react/forbid-prop-types */
import React, {useEffect} from 'react';
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
import {AllCall} from '../helpers/APIcalls';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: screen.height*0.1
  },
  bgimage: {
    flex: 1,
    height: screen.height * 1,
  },
  waiting:{
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 100,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 10,
  },
  text: {
    fontWeight: 'bold',
    color: colors.green,
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    textDecorationLine: 'underline',
    textDecorationColor: colors.green,
  },
});

const Characters = (props) => {
  const {getAllCharacters, navigation} = props;
  const {charactersList} = props.characters; 

  useEffect(() => {
    getAllCharacters('character');
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <ImageBackground source={require('../assets/images/background4.jpg')} resizeMode="cover" style={styles.bgimage}>
        {props.characters.pending ? (
          <ActivityIndicator color={colors.yellow} size="large" style={styles.waiting} />
          ):(
            <View style={styles.content}>
              <FlatList                
                data={charactersList}
                renderItem={({ item }) => (<CharacterDisplay key={item} item={item} onButtonPress={navigation.navigate('CharacterDetail', {title: item.name, id: item.id})} />)}
                keyExtractor={item => item.url}
                ListHeaderComponent={<HeaderList category="characters" />}
                ListFooterComponent={props.characters.next !== null ? <FooterList /> : <View />}
                stickyHeaderIndices={[0]}
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
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Characters);