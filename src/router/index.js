import React from 'react'
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { ratio } from '../utils'
import HomeScreen from '../pages/home'
import SettingsScreen from '../pages/settings'
import SideScreen from '../pages/side'
import BySchool from '../pages/bySchool'

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarLabel: 'Home'
      })
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        tabBarLabel: 'Settings'
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({

    }),
    tabBarOptions: {
      activeTintColor: 'pink',
      inactiveTintColor: 'gray',
      style: {
        height: 50,
        backgroundColor: '#fff'
        // elevation: 0,
        // borderColor: 'gray',
        // borderTopWidth: 1 / ratio
      },
      indicatorStyle: {
        width: 0,
        height: 0
      },
      labelStyle: {
        fontSize: 16
      },
    },
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    lazy: true,
    // 底部导航若开启滑动，会与滑动侧栏冲突！！
    swipeEnabled: false
    // animationEnabled: true
  }
)

const AppNavigation = createStackNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: () => ({
        header: null
      })
    },
    BySchool: {
      screen: BySchool,
      navigationOptions: () => ({
        title: 'BySchool'
      })
    }
    // Side:{
    //   screen: DrawerNavigator,
    //   navigationOptions: () => ({
    //     header: null
    //   })
    // }
  },
  {
    mode: 'modal',
    initialRouteName: 'Home',
    navigationOptions: {
      gesturesEnabled: true
      // gestureResponseDistance: { horizontal: 300 }
    }
  }
)

// const DrawerNavigator = createDrawerNavigator(
//   {
//     App: {
//       screen: AppNavigation
//     },
//     Side: {
//       screen: SideScreen
//     }
//   },
//   {
//     initialRouteName: 'App',
//     drawerWidth: 250,
//     drawerLockMode: 'unlocked',
//     contentOptions: {
//       activeTintColor: 'pink',
//       inactiveTintColor: 'gray',
//       labelStyle: {
//         fontSize: 16
//       },
//       activeLabelStyle: {
//         fontSize: 18
//       }
//     },
//     navigationOptions: {
//       gesturesEnabled: true
//     }
//   }
// )

export default createAppContainer(AppNavigation)
