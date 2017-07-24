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
  color: #59686e;
  text-align: left;
`;

class Base extends Component {
  render() {
    return (
      <BaseStyle>
        <Card>
           <Deploys />
          {/*<Sites />*/}
        </Card>
      </BaseStyle>
    )
  }
}

export default Base
