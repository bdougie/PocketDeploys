import React from 'react';
import {Image, Text, StyleSheet} from "react-native";
import styled from 'styled-components/native';
import moment from 'moment';
import {
  ImageWrapper,
  SubText,
  StyledText,
  BaseWrapper,
  VerticalWrapper
} from "../styles";

const Deploy = ({data}) => {
const time = moment(data.updated_at, 'YYYYMMDD').fromNow();
const commit = data.commit_ref ? data.commit_ref.slice(0,7) : "";
const image = data.screenshot_url
  || 'https://s3-us-west-1.amazonaws.com/publis-brian-images/netlify+images/placeholder.png'

  return (
    <BaseWrapper>
      <VerticalWrapper>
        <StyledText numberOfLines={1}>{data.state}</StyledText>
        <SubText>{data.context} deploy {commit && `from ${data.branch} @${commit}`}</SubText>
      </VerticalWrapper>
    </BaseWrapper>
  )
}

export default Deploy;

