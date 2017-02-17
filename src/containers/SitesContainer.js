import React, {Component} from "react";
import styled from 'styled-components/native';
import {StyleSheet, Image, View, Text} from "react-native";
import {fetchSites}  from '../lib/netlify-api.js';
import {createContainer} from 'react-transmit';
// import placeholder from "../images/placeholder.png";

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
`;

const style = StyleSheet.create({
  image: {
    borderRadius: 3,
    height: 250,
    marginLeft: 10,
    marginRight: 15,
    width: 250,
  },
});

class SitesContainer extends Component {
  render() {
    const {sites} = this.props
    const image = sites.screenshot_url || 'https://s3-us-west-1.amazonaws.com/publis-brian-images/netlify+images/placeholder.png'

    return sites ?
      <Wrapper>
        <StyledText>
          Netlify
        </StyledText>
        <Image style={style.image} source={{uri: image}} />
        <Text>{sites.deploy_url}</Text>
      </Wrapper>
      : <StyledText>...Loading</StyledText>;
  }
}

export default createContainer(SitesContainer, {
  initialVariables: {},
  fragments: {
    sites: () => fetchSites().then(res => res.data)
  }
})
