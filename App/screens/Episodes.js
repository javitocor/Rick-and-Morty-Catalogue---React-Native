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
import EpisodeDisplay from '../components/EpisodeDisplay';
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

const Episodes = (props) => {
  const {getAllEpisodes, updateEpisodes, navigation} = props;
  const {episodesList, next} = props.episodes; 
  const [isloading, setisLoading] = useState(true);

  useEffect(() => {
    getAllEpisodes('episode');
    setisLoading(false);
  }, []);
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <ImageBackground source={require('../assets/images/background4.jpg')} resizeMode="cover" style={styles.bgimage}>
        {isloading ? (
          <ActivityIndicator color={colors.yellow} size="large" style={styles.waiting} />
          ):(
            <View style={styles.content}>
              <FlatList                
                data={episodesList}
                renderItem={({ item }) => (<EpisodeDisplay key={item} item={item} onButtonPress={()=>{navigation.navigate('EpisodeDetail', {title: item.name, id: item.id})}} />)}
                keyExtractor={item => item.url}
                onEndReached={next !==null ? async () => updateEpisodes(next):null}
                onEndReachedThreshold={0.5}
                ListHeaderComponent={<HeaderList category="EPISODES" />}
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
  updateEpisodes: PropTypes.func.isRequired,
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
  updateEpisodes: UpdateCall
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);