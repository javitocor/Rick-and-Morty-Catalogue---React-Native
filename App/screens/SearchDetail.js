/* eslint-disable react/forbid-prop-types */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import HeaderList from '../components/HeaderList';
import generateKey from '../helpers/generateKey';
import {SearchCall} from '../helpers/APIcalls';
import checkResource from '../helpers/checkResource';
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
    width: screen.width*0.85
  },
  button:{
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
  },
  text: {
    color: colors.white,
    fontSize: 16,
  },
  list: {
    marginBottom: 10,
  }
});

const SearchDetail = (props) => {
  const {getSearch, navigation, route} = props;
  const {resource, param, value} = route.params;
  const {searchResults} = props.searches;
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsPending(true);
        await getSearch(resource, param, value);
        setIsPending(false);
      } catch (error) {
        console.log(error)
      }           
    })();  
  },[]);


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <ImageBackground source={require('../assets/images/background2.jpg')} resizeMode="cover" style={styles.bgimage}>
        {isPending ? (
          <ActivityIndicator color={colors.green} size="large" style={styles.waiting} />
          ):(
            <View style={styles.content}>
              <FlatList 
                data={searchResults}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <RowSeparator />}
                keyExtractor={item => generateKey(item.url)}
                ListHeaderComponent={<HeaderList category="SEARCH RESULTS" />}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.list}>
                      <LinearGradient colors={[colors.blue, colors.green, colors.yellow]}>
                        <TouchableOpacity style={styles.button} onPress={()=>{checkResource(item, navigation)}} activeOpacity={0.9}>
                          <Text style={styles.text}>
                            {resource.toUpperCase()}
                            :
                            {' '}
                            {item.name}
                          </Text>
                          <View style={styles.icon}>
                            <Entypo name="chevron-right" size={20} color={colors.blue} />
                          </View>
                        </TouchableOpacity>
                      </LinearGradient>
                    </View>
                  )
                }}
              />
            </View>
          )}
      </ImageBackground>
    </View>
  );
};

SearchDetail.propTypes = {
  searches: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    next: PropTypes.string,
    count: PropTypes.number,
    pages: PropTypes.number,
    value: PropTypes.string,
    param: PropTypes.string,
    resource: PropTypes.string, 
    searchResults: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getSearch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  searches: {
    error: state.searches.error,
    next: state.searches.next,
    count: state.searches.count,
    pages: state.searches.pages,
    value: state.searches.value,
    param: state.searches.param,
    resource: state.searches.resource,
    searchResults:state.searches.searchResults,
    pending: state.characters.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSearch: SearchCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchDetail);