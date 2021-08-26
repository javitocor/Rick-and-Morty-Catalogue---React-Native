import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({

});

const CharacterDisplay = ({ item, onButtonPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text />
      </TouchableOpacity>
    </View>
  );
};

export default CharacterDisplay;