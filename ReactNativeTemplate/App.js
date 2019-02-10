import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image} from 'react-native';
import BottomTabNavigator from './src/navigators/bottom-tab-navigator';
import Drawer from './src/navigators/drawer-navigator';
import HomeNavigator from './src/navigators/screen-stack-navigators';
export default class App extends React.Component {

  
  render() {
    return (
      <Drawer/>
    );
  }
}

