import React, {Component} from "react";
import styled from 'styled-components/native';
import {ListView, StyleSheet, View, Text} from "react-native";
import {fetchDeploysBySite}  from '../lib/netlify-api.js';
import Deploy from "../components/Deploy";
import Header from '../components/Header.js'
import gql from "graphql-tag";
import {graphql} from "react-apollo";

const StyledText = styled.Text`
  font-size: 65;
  text-align: center;
  color: #00C7B7;
`;

class DeploysContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  renderRow(rowData) {
    return (
      <Deploy data={rowData} />
    );
  }

  render() {
    const {data, handleClose} = this.props
    return data && data.deploys !== undefined ?
      <View>
        <Header title="Deploys" action={handleClose} />
        <ListView
          style={{marginTop: 22}}
          dataSource={this.ds.cloneWithRows(data.deploys)}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
      </View>
      : <StyledText>...Loading</StyledText>;
  }
}

const DeploysQuery = gql`
  query DeploysQuery($site_id: String!) {
    deploys(site_id: $site_id) {
      context
      commit_ref
      site_name
      site_id
      updated_at
      branch
      state
    }
  }`
;

const DeploysWithData = graphql(DeploysQuery, {
  options: (ownProps) => ({
    variables: {
      site_id: "682a5357-ee71-4de4-a2bf-1b81dbe7810a"//ownProps.site_id
    }
  })
})(DeploysContainer);

export default DeploysWithData;
