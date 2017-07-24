import React, {Component} from 'react'
import { Text, View } from 'react-native';
import Sites from './SitesContainer'
import Deploys from './DeploysContainer' // remove
import styled from 'styled-components/native';
import Card from '../components/Card.js'

const BaseStyle = styled.View`
  background-color: #132830;
`;

const HeaderText = styled.Text`
  height: 20;
  margin-top: 25;
  margin-left: 10;
  font-size: 12;
  color: white;
  text-align: left;
`;

class Base extends Component {
  render() {
    return (
      <BaseStyle>
       <View style={{height: 50}}>
         <HeaderText>Sites</HeaderText>
       </View>
        <Card>
          {/* <Deploys /> */}
          <Sites />
        </Card>
      </BaseStyle>
    )
  }
}

export default Base
