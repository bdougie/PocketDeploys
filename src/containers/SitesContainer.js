import React, {Component} from "react";
import styled from 'styled-components/native';
import {View, Text} from "react-native";
import {fetchSites}  from '../lib/netlify-api.js';
// import {createContainer} from 'react-transmit-native';
import {createContainer} from 'react-transmit';

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

class SitesContainer extends Component {
  render() {
    const {sites} = this.props
    console.log(sites)
    return (
      <Wrapper>
        <StyledText>
          Netlify
        </StyledText>
        <Text>{sites.deploy_url}</Text>
      </Wrapper>
    );
  }
}

export default createContainer(SitesContainer, {
  initialVariables: {},
  fragments: {
    sites: () => fetchSites().then(res => res.data)
  }
})
