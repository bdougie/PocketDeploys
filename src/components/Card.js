import React from 'react'
import { View, Component } from 'react-native';
import styled from 'styled-components/native';

const StyledCard = styled.View`
  border-radius: 10;
  background: #fff;
  margin-right: 5;
  margin-left: 5;
  min-height: 695;
`;

const Card = (props) => {
  return  (
    <StyledCard>
      {props.children}
    </StyledCard>
  );
}

export default Card;
