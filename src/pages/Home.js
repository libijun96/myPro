import React, { Component } from 'react'
import {
  View, Text, Button, StyleSheet, TouchableOpacity
} from 'react-native'
import DrawerLayout from 'react-native-drawer-layout'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import Menu from '../commom/leftMenu'
import { width } from '../utils'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerLockMode: 'unlocked',
      index: 1
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
    const initialLayout = {
      height: 0,
      width: width
    }
    _renderTabBar = props => (
      <TabBar
        {...props}
        scrollEnabled
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        labelStyle={styles.label}
      />
    )
    _renderScene = ()=>{
    }
    _handleIndexChange (index){
      this.setState({
        index
      })
    }
    renderTab = ()=>{
      return (
        <TabView
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
      )
    }
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
        <View style={styles.container}>
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
  },
  inputField: {
    backgroundColor: 'pink',
    height: 40,
  },
  split: {
    flexDirection: 'row',
  },
  spacedLeft: {
    paddingLeft: 10,
  },
  drawerLock: {
    height: 200,
    paddingTop: 50,
  },
  tabbar: {
    backgroundColor: '#3f51b5',
  },
  tab: {
    width: 120,
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    color: '#fff',
    fontWeight: '400',
  }
})
