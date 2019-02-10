import React, { Component } from "react";
import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from "../screens/SettingsScreen";

export const HomeNavigator = createStackNavigator(
    {
      Home: {screen: HomeScreen},
    },
    
  );

  export const SettingsNavigator = createStackNavigator(
    {
      Settings: {screen: SettingsScreen},
    },
    
  );
  
 