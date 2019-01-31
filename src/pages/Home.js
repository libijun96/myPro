import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import SideMenu from 'react-native-side-menu'
import Menu from '../commom/leftMenu'
import { width } from '../utils'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.SelectMenuItemCallBack = this.SelectMenuItemCallBack.bind(this)
  }
  //点击侧边栏的按钮，回调此函数，关闭menu
  SelectMenuItemCallBack () {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  //点击打开侧边栏
  SelectToOpenLeftSideMenu () {
    this.setState({
      isOpen: true,
    })
  }
  render () {
    //初始化menu，传递回调函数
    const menu = <Menu onSelectMenuItem={this.SelectMenuItemCallBack} />
    return (
      // <View>
      //   <Text>Home</Text>
      //   <Button
      //     title="goBySchool"
      //     color="pink"
      //     onPress={() => {
      //       this.props.navigation.navigate('BySchool')
      //     }}
      //   />
      //   <Button
      //     title="goSide"
      //     color="grey"
      //     onPress={()=>{
      //       this.props.navigation.openDrawer()
      //     }}
      //   />
      // </View>
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => {
          this.setState({
            isOpen: isOpen,
          })
        }}
        menuPosition={'left'}//侧边栏是左边还是右边
        openMenuOffset={width / 2}//侧边栏的宽度
        edgeHitWidth={200}//手指拖动可以打开侧边栏的距离（距离侧边栏）
        toleranceX={200}
      >
        <View style={styles.container}>
          <Text>Home</Text>
          <TouchableOpacity onPress={() => this.SelectToOpenLeftSideMenu()} >
            <Text>点击打开侧边栏</Text>
          </TouchableOpacity>
        </View>
      </SideMenu>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

})
