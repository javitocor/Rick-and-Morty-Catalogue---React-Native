/* eslint-disable react/forbid-prop-types */
import React, {useState,useEffect} from 'react';
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
import LocationDisplay from '../components/LocationDisplay';
import {AllCall, UpdateCall} from '../helpers/APIcalls';
import RowSeparator from '../components/RowSeparator';
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
    width: screen.width*0.85,
  }
});

const Locations = (props) => {
  const {getAllLocations, updateLocations, navigation} = props;
  const {locationsList, next} = props.locations; 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllLocations('location');
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
                data={locationsList}
                renderItem={({ item }) => (<LocationDisplay key={item} item={item} onButtonPress={()=>{navigation.navigate('LocationDetail', {title: item.name, id: item.id})}} />)}
                keyExtractor={item => item.url}
                ListHeaderComponent={<HeaderList category="LOCATIONS" />}
                ListFooterComponent={next !== null ? <FooterList loading={props.locations.pending} onButtonPress={async () => updateLocations(next)} /> : <></>}
                ItemSeparatorComponent={() => <RowSeparator />}
              />
            </View>
        )}
      </ImageBackground>
    </View>
  );
};

Locations.propTypes = {
  locations: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    next: PropTypes.string,
    count: PropTypes.number,
    pages: PropTypes.number,
    locationsList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getAllLocations: PropTypes.func.isRequired,
  updateLocations: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  locations: {
    error: state.locations.error,
    next: state.locations.next,
    count: state.locations.count,
    pages: state.locations.pages,
    locationsList: state.locations.locationsList,
    pending: state.locations.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllLocations: AllCall,
  updateLocations: UpdateCall
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Locations);