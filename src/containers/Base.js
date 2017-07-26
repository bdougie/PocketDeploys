import React, {Component} from 'react'
import { Text, View } from 'react-native';
import Sites from './SitesContainer'
import styled from 'styled-components/native';
import Card from '../components/Card.js'
import Header from '../components/Header.js'
import {StyledCard, BaseStyle} from "../styles";

class Base extends Component {
  render() {
    return (
      <BaseStyle>
        <Header title="Sites" />
        <StyledCard>
          <Sites />
        </StyledCard>
      </BaseStyle>
    )
  }
}

export default Base
