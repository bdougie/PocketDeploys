import React from 'react'
import { View, Component } from 'react-native';
import styled from 'styled-components/native';
import {StyledCard} from "../styles";

const Card = (props) => {
  return  (
    <StyledCard>
      {props.children}
    </StyledCard>
  );
}

export default Card;
