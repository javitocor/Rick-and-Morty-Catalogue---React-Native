/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import checkResource from '../helpers/checkResource';
import generateKey from '../helpers/generateKey';
import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
  },
});

const Expandable = (props) => {
  const {value, object, navigation,info} = props;
  const [expandable, setExpandable] = useState(false);
  
  function handleClick(){
    setExpandable(!expandable)
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={[colors.blue, colors.green, colors.yellow]} style={styles.gradient}>
        <TouchableOpacity style={styles.button} onPress={()=>handleClick()} activeOpacity={0.9}>
          <Text style={styles.text}>{value}</Text>
          <View style={styles.icon}>
            {expandable ? 
                        (<Entypo name="chevron-up" size={20} color={colors.blue} />)
                      : (<Entypo name="chevron-down" size={20} color={colors.blue} />)
            }            
          </View>
        </TouchableOpacity>
      </LinearGradient>
      {expandable && (
        <FlatList 
          data={object[value]}
          keyExtractor={item =>generateKey(item)}
          renderItem={({ item }) =>{
            return(
              <View style={styles.content}>
                <LinearGradient colors={[colors.blue, colors.green, colors.yellow]}>
                  <TouchableOpacity style={styles.button} onPress={()=>{checkResource(item, navigation)}} activeOpacity={0.9}>
                    <Text style={styles.text}>{item.name}</Text>
                    <View style={styles.icon}>
                      <Entypo name="chevron-right" size={20} color={colors.blue} />
                    </View>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            )
          }}
        />
      )}
    </View>
  );
}

export default Expandable;