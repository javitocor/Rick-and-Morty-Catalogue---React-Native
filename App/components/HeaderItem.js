/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:'center',
    marginVertical: 20,
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: colors.green,
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
    textDecorationLine: 'underline',
    textDecorationColor: colors.green,
  },
  image:{
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  }
});

const HeaderItem = ({name, image}) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      {image && (
        <Image source={{uri:image}} resizeMode="contain" style={styles.image} />
      )}
    </View>
  );
};

export default HeaderItem;