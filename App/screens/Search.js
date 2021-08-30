/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Button from '../components/Button';
import { KeyboardSpacer } from '../components/KeyboardSpacer';
import getParams from '../helpers/getParams';
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
  content: {
    height: screen.height *0.7,
    width: screen.width * 0.85,
    flexDirection: 'column',    
    alignItems: 'center',
    justifyContent:'center',
  },
  top:{
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 40,
  },
  bottom: {
    width:'100%',
    height: 150,
    alignItems: 'center',
    marginTop: 20,
  },
  resource: {
    width:'85%',
    alignItems: 'center',
    justifyContent:'center',
    marginVertical: 5,
  },
  param: {
    width:'85%',
    alignItems: 'center',
    justifyContent:'center',
    marginVertical: 5,
  },
  dropdownStyle: {
    justifyContent:'center',
    width: '100%',
    height: 65,
    borderColor: colors.blue,
    borderWidth: 2, 
    borderRadius: 5,
    backgroundColor: colors.yellow,
    paddingHorizontal: 5,
    paddingTop: 0,
  },
  button: {    
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
  },
  inputText:{
    width:'85%',
    backgroundColor: colors.yellow,
    borderColor: colors.blue,
    borderWidth: 2, 
    borderRadius: 5,
    height: '40%',
    padding: 8,
    color: colors.blue,
  }
});

const Search = (props) => {
  const {navigation} = props;
  const [values,setValues] = useState([{label:'Character', value:'character'}, {label:'Episode', value:'episode'}, {label:'Location', value:'location'}]);
  const [resource, setResource] = useState('');
  const [param, setParam] = useState([]);
  const [input, setInput] = useState('');
  const [scrollEnabled, setScrollEnabled] = useState(false);


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <ImageBackground source={require('../assets/images/background2.jpg')} resizeMode="cover" style={styles.bgimage}>
        <ScrollView scrollEnabled={scrollEnabled}>
          <View style={styles.content}>
            <View style={styles.top}>
              <View style={styles.resource}>
                <Dropdown 
                  label='Select Resource'
                  data={values}
                  onChangeText={(value) => { setResource(value) }}
                  fontSize={16}
                  labelFontSize={12}
                  baseColor={colors.green}
                  textColor={colors.blue}
                  selectedItemColor={colors.blue}
                  containerStyle={styles.dropdownStyle}
                  value="character"
                />
              </View>
              <View style={styles.param}>
                <Dropdown 
                  label='Select Option'
                  data={getParams(resource)}
                  onChangeText={(value) => { setParam(value) }}
                  fontSize={16}
                  labelFontSize={12}
                  baseColor={colors.green}
                  textColor={colors.blue}
                  selectedItemColor={colors.blue}
                  itemPadding={8}
                  containerStyle={styles.dropdownStyle}
                  value="Name"
                />
              </View>
            </View>
            <View style={styles.bottom}>
              <TextInput 
                style={styles.inputText}
                placeholder="Type here to Search!"
                placeholderTextColor={colors.green}
                placeholderStyle={{ fontWeight: 'bold' }}
                onChangeText={text => setInput(text)}
              />
            </View>
            <View style={styles.button}>
              <Button 
                text="Search!"
                onPress={() => navigation.navigate('SearchDetail', {resource, param, value: input})}
              />
            </View>
            <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};


export default Search;