import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {},
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
  }
});

const LocationDisplay = ({ item, onButtonPress }) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={[colors.blue, colors.green, colors.yellow]}>
        <TouchableOpacity style={styles.button} onPress={onButtonPress} activeOpacity={0.9}>
          <Text style={styles.text}>{item.name}</Text>
          <View style={styles.icon}>
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default LocationDisplay;