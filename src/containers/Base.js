import React from 'react'
import { Text, View, Component } from 'react-native';
import Sites from './SitesContainer'
import styled from 'styled-components/native';
import Card from '../components/Card.js'

const BaseStyle = styled.View`
  background-color: #132830;
`;

const HeaderText = styled.Text`
  height: 20;
  margin-top: 25;
  margin-left: 9;
  font-size: 12;
  color: white;
  text-align: left;
`;

const Base = () => {
  return (
    <BaseStyle>
      <View style={{height: 50}}>
        <HeaderText>Sites</HeaderText>
      </View>
      <Card>
        <Sites />
      </Card>
    </BaseStyle>
  )
}

export default Base
