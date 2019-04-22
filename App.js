
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';


const MainNavigator = createBottomTabNavigator({
    welcome: WelcomeScreen,
    auth: AuthScreen,
    main: {
      screen: createBottomTabNavigator({
        map: MapScreen,
        deck: DeckScreen,
        review: {
          screen: createStackNavigator({
            review: ReviewScreen,
            settings: SettingsScreen
          })
        }
      })
    }
  }
);

const App = createAppContainer(MainNavigator)

export default App;
