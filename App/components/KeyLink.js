/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import Expandable from './Expandable';
import navigateTo from '../helpers/navigateTo';
import generateKey from '../helpers/generateKey';
import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '100%'
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
  gradient: {
    marginVertical:5,
  }
});

const KeyLink = (props) => {
  const {value, object, navigation, info} = props;
  return (
    <LinearGradient colors={[colors.blue, colors.green, colors.yellow]} style={styles.gradient}>
      <View style={styles.container}>
        {Object.keys(object).includes(value) 
        ? (
          <Expandable key={generateKey('z')} value={value} object={object} navigation={navigation} info={info} />
        )
        :(
          <TouchableOpacity style={styles.button} onPress={()=>{navigateTo(info, value, navigation)}} activeOpacity={0.8}>
            <Text style={styles.text}>{info[value].name}</Text>
            <View style={styles.icon}>
              <Entypo name="chevron-right" size={20} color={colors.blue} />
            </View>
          </TouchableOpacity>
        )
        }
      </View>
    </LinearGradient>
  );
}

export default KeyLink;