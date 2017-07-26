import React from 'react';
import styled from 'styled-components/native';
import {colors} from "./variables";

const ActionText = styled.Text`
  height: 20;
  margin-top: 25;
  margin-left: 10;
  font-size: 12;
  color: red;
  text-align: right;
`;

const ContentPadding = styled.View`
  flex-direction: row;
  padding-top: 10;
  padding-left: 14;
  padding-right: 14;
`;

const BaseWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  padding-top: 10;
  padding-left: 14;
  padding-right: 14;
  flex: 1;
`;

const BaseStyle = styled.View`
  background-color: #132830;
`;

const CenteredText = styled.Text`
  font-size: 65;
  text-align: center;
  color: ${colors.green};
`;

const HeaderStyle = styled.View`
  background-color: #132830;
  flex-direction: row;
`;

const HeaderText = styled.Text`
  height: 20;
  margin-top: 25;
  margin-left: 10;
  font-size: 12;
  color: white;
  text-align: center;
`;

const StyledText = styled.Text`
  font-size: 20;
  font-weight: bold;
  text-align: left;
  color: ${colors.green};
`;

const SubText = styled.Text`
  font-size: 14;
  text-align: left;
  color: ${colors.lightGrey};
`;

const StyledCard = styled.View`
  border-radius: 10;
  background: #fff;
  margin-right: 5;
  margin-left: 5;
  min-height: 695;
`;

const ImageWrapper = styled.View`
  width: 50;
`;

const VerticalWrapper = styled.View`
  flex-direction: column;
  margin-left: 10;
  margin-right: 10;
  height: 50;
  min-width: 200;
`;

export {
  ActionText,
  BaseWrapper,
  BaseStyle,
  ContentPadding,
  HeaderStyle,
  HeaderText,
  ImageWrapper,
  SubText,
  StyledText,
  StyledCard,
  VerticalWrapper,
};
