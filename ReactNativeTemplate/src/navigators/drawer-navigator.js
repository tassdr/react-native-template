import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import {View, Text, TouchableOpacity } from "react-native";
import BottomTabNavigator from './bottom-tab-navigator'
import HomeScreen from '../screens/HomeScreen'
import { SettingsNavigator } from "./screen-stack-navigators";

const DrawerNavigator = createDrawerNavigator({
       Home: BottomTabNavigator,
        Settings: SettingsNavigator
})

const Drawer = createAppContainer(DrawerNavigator)

export default Drawer;