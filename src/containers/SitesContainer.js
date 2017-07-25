import React, {Component} from "react";
import styled from 'styled-components/native';
import {Modal, ListView, StyleSheet, View, Text} from "react-native";
import {fetchSites}  from '../lib/netlify-api.js';
import Site from "../components/Site";
import DeploysContainer from "../containers/DeploysContainer";
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
    this.state = {modalVisible: false};
  }

  renderRow(rowData) {
    return (
      <Site handleOpen={this._openDeploys} data={rowData} />
    );
  }

  render() {
    const {data} = this.props
    return data && data.sites !== undefined ?
      <View>
        <ListView
          dataSource={this.ds.cloneWithRows(data.sites)}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
        <Modal
          animationSlide={"slide"}
          visible={this.state.modalVisible}
        >
          <DeploysContainer handleClose={this._closeDeploys} />
        </Modal>
      </View>
      : <StyledText>...Loading</StyledText>;
  }

  _openDeploys = () => {
    this.setState({modalVisible: true})
  }

  _closeDeploys = () => {
    this.setState({modalVisible: false})
  }
}

const SitesQuery = gql`
  query {
    sites {
      id
      name
      updated_at
      screenshot_url
    }
  }`
;

const SitesWithData = graphql(SitesQuery)(SitesContainer);

export default SitesWithData;
