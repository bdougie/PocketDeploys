import React, {Component} from "react";
import styled from 'styled-components/native';
import {ListView, StyleSheet, View, Text} from "react-native";
import {fetchSites}  from '../lib/netlify-api.js';
import Site from "../components/Site";
import gql from "graphql-tag";
import {graphql} from "react-apollo";

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const StyledText = styled.Text`
  font-size: 65;
  text-align: center;
  color: #00C7B7;
`;

class SitesContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  renderRow(rowData) {
    return (
      <Site data={rowData} />
    );
  }

  render() {
    const {data} = this.props
    console.log(data.sites)
    return data && data.sites != undefined ?
      <ListView
        dataSource={this.ds.cloneWithRows(data.sites)}
        renderRow={(rowData) => this.renderRow(rowData)}
      />
      : <StyledText>...Loading</StyledText>;
  }
}

const SitesQuery = gql`
  query {
    sites {
      name
      updated_at
      screenshot_url
    }
  }`
;

const SitesWithData = graphql(SitesQuery)(SitesContainer);

export default SitesWithData;
