/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Router from './src/router'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <Router onNavigationStateChange={() => {

      }} />
    )
  }
  componentDidMount () {
    setTimeout(() => {
      SplashScreen.hide()
    }, 5000)
  }
}

AppRegistry.registerComponent(appName, () => App)
