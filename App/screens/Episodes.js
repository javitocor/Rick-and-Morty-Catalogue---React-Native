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
  Text
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EpisodeDisplay from '../components/EpisodeDisplay';
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
    flexDirection: 'column',
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

const Episodes = (props) => {
  const {getAllEpisodes} = props;
  const {episodesList} = props.episodes; 

  useEffect(() => {
    getAllEpisodes('episode');
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <ImageBackground source={require('../assets/images/background4.jpg')} resizeMode="cover" style={styles.bgimage}>
        {props.episodes.pending ? (
          <ActivityIndicator color={colors.yellow} size="large" style={styles.waiting} />
          ):(
            <View style={styles.content}>
              <Text syle={styles.text}>CHARACTERS</Text>
              <FlatList                
                data={episodesList}
                renderItem={({ item }) => (<EpisodeDisplay key={item} item={item} />)}
                keyExtractor={item => item.url}
              />
            </View>
        )}
      </ImageBackground>
    </View>
  );
};

Episodes.propTypes = {
  episodes: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    next: PropTypes.string,
    count: PropTypes.number,
    pages: PropTypes.number,
    episodesList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getAllEpisodes: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  episodes: {
    error: state.episodes.error,
    next: state.episodes.next,
    count: state.episodes.count,
    pages: state.episodes.pages,
    episodesList: state.episodes.episodesList,
    pending: state.episodes.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllEpisodes: AllCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);