import React from 'react';
import {View, TouchableWithoutFeedback, Image, Text, StyleSheet} from "react-native";
import styled from 'styled-components/native';
import moment from 'moment';
import RNStyles from "../styles/rnStyles.js";
import {
  ImageWrapper,
  SubText,
  StyledText,
  BaseWrapper,
  VerticalWrapper
} from "../styles";

const Site = ({data, handleOpen}) => {
const time = moment(data.updated_at, 'YYYYMMDD').fromNow();
const open = () => handleOpen(data.id);
const image = data.screenshot_url
  || 'https://s3-us-west-1.amazonaws.com/publis-brian-images/netlify+images/placeholder.png'

  return (
    <TouchableWithoutFeedback onPress={open}>
      <BaseWrapper>
        <ImageWrapper>
          <Image style={RNStyles.image} source={{uri: image}} />
        </ImageWrapper>
        <VerticalWrapper>
          <StyledText numberOfLines={1}>{data.name}</StyledText>
          <SubText>Last updated at {time}</SubText>
        </VerticalWrapper>
      </BaseWrapper>
    </TouchableWithoutFeedback>
  )
}

export default Site;
