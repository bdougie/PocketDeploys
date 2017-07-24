import React from 'react';
import {Image, Text, StyleSheet} from "react-native";
import styled from 'styled-components/native';
import moment from 'moment';

const StyledText = styled.Text`
  font-size: 20;
  font-weight: bold;
  text-align: left;
  color: #00C7B7;
`;

const SubText = styled.Text`
  font-size: 14;
  text-align: left;
  color: #59686e;
`;

const BaseWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  padding-top: 10;
  padding-left: 14;
  padding-right: 14;
  flex: 1;
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

const style = StyleSheet.create({
  image: {
    borderRadius: 3,
    marginRight: 5,
    width: 50,
    minHeight: 30,
  },
});

const Deploys = ({data}) => {
  console.log(data)
  const time = moment(data.updated_at, 'YYYYMMDD').fromNow();
  const image = data.screenshot_url
    || 'https://s3-us-west-1.amazonaws.com/publis-brian-images/netlify+images/placeholder.png'

  return (
    <BaseWrapper>
      <VerticalWrapper>
        <StyledText numberOfLines={1}>{data.state}</StyledText>
        <SubText>{data.context} deploy from {data.branch}@{data.commit_ref}</SubText>
      </VerticalWrapper>
    </BaseWrapper>
  )
}

export default Deploys;

