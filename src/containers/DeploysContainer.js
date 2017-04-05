import React, {Component} from "react";
import styled from 'styled-components/native';
import {ListView, StyleSheet, View, Text} from "react-native";
import {headers, url}  from '../lib/netlify-api.js';
import {createContainer} from 'react-transmit';
import DeploysComponent from "../components/Deploys";

import { connectRequest } from 'redux-query';
import { connect } from 'react-redux';

import { getDeploy } from '../reducers/deploys';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const StyledText = styled.Text`
  font-size: 65;
  text-align: center;
  color: #00C7B7;
`;

class Deploys extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentDidMount() {
    // console.log(fetchDeploysBySite('69350086-d20e-4b5a-84cf-bf367a848374'))
  }

  renderRow(rowData) {
    return (
      <DeploysComponent data={rowData} />
    );
  }

  render() {
    const {sites} = this.props
    console.log(this.props)
    return sites ?
      <ListView
        dataSource={this.ds.cloneWithRows(sites)}
        renderRow={(rowData) => this.renderRow(rowData)}
      />
      : <StyledText>...Loading</StyledText>;
  }
}

const DeploysContainer = connectRequest((props) => ({
  update: {},
  url: `${url}/sites/${props.siteId}/deploys`,
  options: {headers}
}))(Deploys);

const mapStateToProps = (state, props) => {
  return {
    dashboard: getDeploy(state, props),
  };
};

export default connect(mapStateToProps)(DeploysContainer);
