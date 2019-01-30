import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Home extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <View>
        <Text>Home</Text>
        <Button
          title="goBySchool"
          color="pink"
          onPress={()=>{
            this.props.navigation.navigate('BySchool')
          }}
        />
        <Button
          title="goSide"
          color="grey"
          onPress={()=>{
            this.props.navigation.openDrawer()
          }}
        />
      </View>
    )
  }
}
