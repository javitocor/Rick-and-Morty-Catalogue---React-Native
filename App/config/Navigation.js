import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Episodes from '../screens/Episodes';
import EpisodeDetail from '../screens/EpisodeDetail';
import Locations from '../screens/Locations';
import LocationDetail from '../screens/LocationDetail';
import Characters from '../screens/Characters';
import CharacterDetail from '../screens/CharacterDetail';
import Search from '../screens/Search';
import SearchDetail from '../screens/SearchDetail';
import Header from '../components/Header';
import colors from '../constants/colors';

const EpisodeStack = createStackNavigator();

function EpisodeStackScreen() {
  return (
    <EpisodeStack.Navigator screenOptions={{ initialRouteName: "EpisodesScreen", header: (props) => <Header {...props} /> }}>
      <EpisodeStack.Screen name="EpisodesScreen" component={Episodes} />
      <EpisodeStack.Screen name="EpisodeDetail" component={EpisodeDetail} option={{unmountOnBlur: true }} />
    </EpisodeStack.Navigator>
  );
}

const LocationStack = createStackNavigator();

function LocationStackScreen() {
  return (
    <LocationStack.Navigator screenOptions={{ initialRouteName: "LocationsScreen", header: (props) => <Header {...props} /> }}>
      <LocationStack.Screen name="LocationsScreen" component={Locations} />
      <LocationStack.Screen name="LocationDetail" component={LocationDetail} />
    </LocationStack.Navigator>
  );
}

const CharacterStack = createStackNavigator();

function CharacterStackScreen() {
  return (
    <CharacterStack.Navigator screenOptions={{ initialRouteName: "CharactersScreen", header: (props) => <Header {...props} /> }}>
      <CharacterStack.Screen name="CharactersScreen" component={Characters} />
      <CharacterStack.Screen name="CharacterDetail" component={CharacterDetail} />
    </CharacterStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator screenOptions={{  initialRouteName: "SearchScreen", header: (props) => <Header {...props} /> }}>
      <SearchStack.Screen name="SearchScreen" component={Search} />
      <SearchStack.Screen name="SearchDetail" component={SearchDetail} />
    </SearchStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({        
      initialRouteName: "Home",
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'md-home' : 'md-home-outline';
        } else if (route.name === 'Episodes') {
          iconName = focused ? 'albums' : 'albums-outline';
        } else if (route.name === 'Locations') {
          iconName = focused ? 'locate' : 'locate-outline';
        } else if (route.name === 'Characters') {
          iconName = focused ? 'people-circle' : 'people-circle-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'search-circle' : 'search-circle-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colors.green,
      tabBarInactiveTintColor: colors.blue,
      tabBarHideOnKeyboard: true,
      tabBarActiveBackgroundColor: colors.blue,
      tabBarInactiveBackgroundColor: colors.green,
      tabBarItemStyle: {borderColor: colors.yellow, borderWidth:1,},
    })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen
        name="Characters"
        component={CharacterStackScreen}
        options={{ headerShown: false }} 
        listeners={({ navigation }) => ({
        tabPress: (e) => {
          e.preventDefault();
          navigation.navigate('Characters', {screen: 'CharactersScreen' });
        },
      })}
      />
      <Tab.Screen
        name="Episodes"
        component={EpisodeStackScreen}
        options={{ headerShown: false }} 
        listeners={({ navigation }) => ({
        tabPress: (e) => {
          e.preventDefault();
          navigation.navigate('Episodes', {screen: 'EpisodesScreen' });
        },
      })}
      />
      <Tab.Screen
        name="Locations"
        component={LocationStackScreen}
        options={{ headerShown: false }} 
        listeners={({ navigation }) => ({
        tabPress: (e) => {
          e.preventDefault();
          navigation.navigate('Locations', {screen: 'LocationsScreen' });
        },
      })}
      />
      <Tab.Screen name="Search" component={SearchStackScreen} options={{ headerShown: false, unmountOnBlur:true }} />
    </Tab.Navigator>
  );
}

export default () => (
  <NavigationContainer>
    <TabNavigation />
  </NavigationContainer>
);