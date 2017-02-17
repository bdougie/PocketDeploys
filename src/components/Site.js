import React from 'react';
import {Image, Text, StyleSheet} from "react-native";
import styled from 'styled-components/native';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const StyledText = styled.Text`
  font-size: 65;
  text-align: center;
  color: #00C7B7;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.View`
  padding: 55;
  flex: 1;
`;

const style = StyleSheet.create({
  image: {
    borderRadius: 3,
    height: 50,
    marginLeft: 10,
    marginRight: 15,
    width: 50,
  },
});

const Site = ({data}) => {
  const image = data.screenshot_url || 'https://s3-us-west-1.amazonaws.com/publis-brian-images/netlify+images/placeholder.png'

  return (
    <Wrapper>
      <Image style={style.image} source={{uri: data.image}} />
      <Text>{data.deploy_url}</Text>
    </Wrapper>
  )
}

export default Site;
