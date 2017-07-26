import React, {Component} from "react";
import styled from 'styled-components/native';
import {ListView, StyleSheet, View, Text} from "react-native";
import {fetchDeploysBySite}  from '../lib/netlify-api.js';
import Deploy from "../components/Deploy";
import Header from '../components/Header.js'
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import {TextLoader} from "../components/Loader";
import {colors} from "../styles/variables.js";

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
    console.log(data)
    return data && data.deploys !== undefined ?
      <View>
        <Header title="Deploys" action={handleClose} />
        <ListView
          style={{marginTop: 22}}
          dataSource={this.ds.cloneWithRows(data.deploys)}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
      </View>
        : <View>
          <Header title="Deploys" action={handleClose} />
        <TextLoader />
    </View>;
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
  options: ({siteId}) => ({
    variables: {
      site_id: siteId
    }
  })
})(DeploysContainer);

export default DeploysWithData;
