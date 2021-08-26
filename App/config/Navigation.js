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

const EpisodeStack = createStackNavigator();

function EpisodeStackScreen() {
  return (
    <EpisodeStack.Navigator>
      <EpisodeStack.Screen name="EpisodesScreen" component={Episodes} options={{header: (props) => <Header {...props} />}} />
      <EpisodeStack.Screen name="EpisodeDetail" component={EpisodeDetail} options={{header: (props) => <Header {...props} />}} />
    </EpisodeStack.Navigator>
  );
}

const LocationStack = createStackNavigator();

function LocationStackScreen() {
  return (
    <LocationStack.Navigator>
      <LocationStack.Screen name="LocationsScreen" component={Locations} options={{header: (props) => <Header {...props} />}} />
      <LocationStack.Screen name="LocationDetail" component={LocationDetail} options={{header: (props) => <Header {...props} />}} />
    </LocationStack.Navigator>
  );
}

const CharacterStack = createStackNavigator();

function CharacterStackScreen() {
  return (
    <CharacterStack.Navigator>
      <CharacterStack.Screen name="CharactersScreen" component={Characters} options={{header: (props) => <Header {...props} />}} />
      <CharacterStack.Screen name="CharacterDetail" component={CharacterDetail} options={{header: (props) => <Header {...props} />}} />
    </CharacterStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="SearchScreen" component={Search} options={{header: (props) => <Header {...props} />}} />
      <SearchStack.Screen name="SearchDetail" component={SearchDetail} options={{header: (props) => <Header {...props} />}} />
    </SearchStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'md-home' : 'md-home-outline';
        } else if (route.name === 'Episodes') {
          iconName = focused ? 'albums' : 'albums-outline';
        } else if (route.name === 'Locations') {
          iconName = focused ? 'ios-location' : 'ios-location-outline';
        } else if (route.name === 'Characters') {
          iconName = focused ? 'people-circle' : 'people-circle-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'search-circle' : 'search-circle-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'yellow',
      tabBarInactiveTintColor: 'green',
    })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Characters" component={CharacterStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Episodes" component={EpisodeStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Location" component={LocationStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={SearchStackScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default () => (
  <NavigationContainer>
    <TabNavigation />
  </NavigationContainer>
);