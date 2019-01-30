import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import SideMenu from 'react-native-side-menu'
import { width } from '../utils'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render () {
    const menu = <Text style={{ marginTop: 22 }}>aaa</Text>
    return (
      <View>
        <Text>Home</Text>
        <Button
          title="goBySchool"
          color="pink"
          onPress={() => {
            this.props.navigation.navigate('BySchool')
          }}
        />
        <SideMenu
          menu={menu}
          isOpen={this.state.isOpen}
          openMenuOffset={width / 2}     //抽屉的宽度
          hiddenMenuOffset={20}          //抽屉关闭状态时,显示多少宽度 默认0 抽屉完全隐藏
          edgeHitWidth={60}              //距离屏幕多少距离可以滑出抽屉,默认60
          disableGestures={false}
          menuPosition={'left'}
          autoClosing={false} 
        >
          <Text>SideMenu</Text>
        </SideMenu>
        {/* <Button
          title="goSide"
          color="grey"
          onPress={()=>{
            this.props.navigation.openDrawer()
          }}
        /> */}
      </View>
    )
  }
}
