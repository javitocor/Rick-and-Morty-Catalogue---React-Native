/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 30,
  },
  button: {
    flexDirection:'row',
    marginVertical: 20,
    backgroundColor: colors.yellow,
    padding:10,
    borderRadius:5,
  },
  buttonText: {
    color: colors.green,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
  }
});

const FooterList = ({onButtonPress, loading}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Show More</Text>
        {loading ? (
          <ActivityIndicator
            color={colors.green}
            style={{marginLeft: 8}}
          />
          ) : <View style={styles.footer} />}
      </TouchableOpacity>
    </View>
  );
};

export default FooterList;