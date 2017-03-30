/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import Main from "./src";

import { StackNavigator } from 'react-navigation';

const navTextColor = 'white';
const headerBackgrounColor = '#132830';

class PocketDeploys extends Component {
  static navigationOptions = {
    title: 'Dashboard',
    header: () => ({
      style: {backgroundColor: headerBackgrounColor},
      tintColor: navTextColor,
      left: (<Text style={{marginLeft: 10, color: navTextColor}}>Sites</Text>),
    })
  };

  render() {
    return (
      <Main />
    );
  }
}

const PocketDeploysWithNavigation = StackNavigator({
  Home: { screen: PocketDeploys },
});

AppRegistry.registerComponent('PocketDeploys', () => PocketDeploysWithNavigation);
