import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class LeftMenu extends Component {
  constructor(props) {
    super(props)
    this.selectSideMenu = this.selectSideMenu.bind(this)
  }


  //函数回调
  selectSideMenu () {
    this.props.onSelectMenuItem();
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
          this.selectSideMenu();
        }}>
         <Text>点击关闭侧边栏</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

})
