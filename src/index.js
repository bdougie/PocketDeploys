import React from 'react'
import { View, StatusBar, Component } from 'react-native'
import Base from './containers/Base';

const Main = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Base />
    </View>
  )
}

export default Main
