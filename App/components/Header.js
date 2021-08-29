import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground
} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    width: screen.width*1,
    height:screen.height*0.1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.black,
  },
  back:{
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: screen.width*0.2,
    paddingLeft: 5,
  },
  center:{
    width: screen.width*0.6,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  right: {
    width: screen.width*0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  imageIcon: {
    width: 30,
    height: 30,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: colors.yellow
  },
});


function Header(props) {
  return (    
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Entypo name="chevron-left" size={28} color={colors.yellow} />
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <ImageBackground source={require('../assets/images/logo.png')} resizeMode="contain" style={styles.image} />
      </View>
      <View style={styles.right}>
        <Image source={require('../assets/images/icon.png')} resizeMode="cover" style={styles.imageIcon} />
      </View>
    </View>
  );
};


export default Header;