import React, { Component } from 'react'
import {
  View, Text, Button, StyleSheet, TouchableOpacity
} from 'react-native'
import DrawerLayout from 'react-native-drawer-layout'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import Menu from '../commom/leftMenu'
import { width } from '../utils'

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#fff' }]} >
    <Text>Home</Text>
    <Button
      title="goBySchool"
      color="pink"
      onPress={() => {
        this.props.navigation.navigate('BySchool')
      }}
    />
    <Button
      title="open drawer"
      color="gray"
      onPress={() => this.drawer.openDrawer()}
    />
  </View>
)
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
)
const LazyPlaceholder = ({ route }) => (
  <View style={styles.scene}>
    <Text>Loading {route.title}…</Text>
  </View>
)
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerLockMode: 'unlocked',
      index: 0,
      routes: [
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
      ],
      loaded: ['first']
    }
  }
  _handleIndexChange = index =>
    this.setState(state => {
      const { key } = state.routes[index];

      return {
        index,
        // If the route isn't loaded already, add it's key to the loaded list
        // This way routes will be loaded as we navigate to them
        loaded: state.loaded.includes(key)
          ? state.loaded
          : [...state.loaded, key],
      }
    })

  _renderScene = ({ route }) => {
    if (
      this.state.routes.indexOf(route) !== this.state.index &&
      !this.state.loaded.includes(route.key)
    ) {
      // If the route is not focused and not loaded, render a placeholder
      return <LazyPlaceholder route={route} />;
    }

    switch (route.key) {
      case 'first':
        return <FirstRoute />;
      case 'second':
        return <SecondRoute />;
      default:
        return null;
    }
  }
  render () {
    const navigationView = (
      <View style={[styles.container]}>
        <Text>Hello there!</Text>
        <Button
          title="Close drawer"
          color="gray"
          onPress={() => this.drawer.closeDrawer()}
        />
      </View>
    )
    return (
      <DrawerLayout
        // onDrawerSlide={e =>
        //   this.setState({ drawerSlideOutput: JSON.stringify(e.nativeEvent) })}
        // onDrawerStateChanged={e =>
        //   this.setState({ drawerStateChangedOutput: JSON.stringify(e) })}
        drawerBackgroundColor="pink"
        drawerWidth={width * 0.6}
        drawerLockMode={this.state.drawerLockMode}
        ref={drawer => {
          return (this.drawer = drawer)
        }}
        // 设置拖动过程中是否隐藏软键盘
        keyboardDismissMode="on-drag"
        statusBarBackgroundColor="red"
        renderNavigationView={() => navigationView}
      >
        {/* tab的滑动影响侧边栏的滑动 */}
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          onIndexChange={this._handleIndexChange}
          initialLayout={{ width }}
        />
      </DrawerLayout>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})
