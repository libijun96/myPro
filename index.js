/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
  componentDidMount () {
    setTimeout(() => {
      SplashScreen.hide()
    }, 5000)
  }
}

AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
