import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../pages/Home'
import SettingsScreen from '../pages/settings'

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
})

export default createAppContainer(TabNavigator)
