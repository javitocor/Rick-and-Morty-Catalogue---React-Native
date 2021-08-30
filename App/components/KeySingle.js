/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    color: colors.white,
    fontSize: 16,
  },
  gradient:{
    marginVertical: 5
  }
});

const KeySingle = (props) => {
  const {item, value} = props;
  
  return (
    <LinearGradient colors={[colors.blue, colors.green, colors.yellow]} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {value}
          :
          {' '}
          {item[value] ? item[value] : 'No Data' }
        </Text>
      </View>
    </LinearGradient>
  );
}

export default KeySingle;