import React, {Component} from 'react'
import { Text, TouchableHighlight, View } from 'react-native';
import styled from 'styled-components/native';

const BaseStyle = styled.View`
  background-color: #132830;
  flex-direction: row;
`;

const HeaderText = styled.Text`
  height: 20;
  margin-top: 25;
  margin-left: 10;
  font-size: 12;
  color: white;
  text-align: left;
`;

const ActionText = styled.Text`
  height: 20;
  margin-top: 25;
  margin-left: 10;
  font-size: 12;
  color: red;
  text-align: right;
`;

const Header = ({title, action}) => (
  <BaseStyle>
   <View style={{flexDirection: 'row', height: 50}}>
     <HeaderText>{title}</HeaderText>
     {action &&
       <TouchableHighlight onPress={action}>
         <ActionText>Close</ActionText>
       </TouchableHighlight>
     }
   </View>
  </BaseStyle>
);

export default Header;

