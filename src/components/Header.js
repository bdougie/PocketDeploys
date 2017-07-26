import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native';
import styled from 'styled-components/native';
import RNStyles from "../styles/rnStyles.js";
import {
  ActionText,
  HeaderText,
  HeaderStyle,
} from "../styles";

const Header = ({title, action}) => (
  <HeaderStyle>
   <View style={RNStyles.header}>
     <HeaderText>{title}</HeaderText>
     {action &&
       <TouchableHighlight onPress={action}>
         <ActionText>Close</ActionText>
       </TouchableHighlight>
     }
   </View>
  </HeaderStyle>
);

export default Header;

