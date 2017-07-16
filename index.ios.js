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

export default class PocketDeploys extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('PocketDeploys', () => PocketDeploys);
