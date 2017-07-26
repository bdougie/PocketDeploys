import React, {Component} from "react";
import styled from 'styled-components/native';
import {Modal, ListView, StyleSheet, View, Text} from "react-native";
import {fetchSites}  from '../lib/netlify-api.js';
import Site from "../components/Site";
import DeploysContainer from "../containers/DeploysContainer";
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import {ImageLoader} from "../components/Loader";
import {colors} from "../styles/variables.js";
import {BaseStyle, StyledCard} from "../styles";

class SitesContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {modalVisible: false, siteId: null};
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
          animationType={"slide"}
          visible={!!this.state.siteId}
        >
          {/*
              This is being rendered by a modal, which is is why
              the Deploy Container is inline and styling is duplicated
          */}
          <BaseStyle>
            <StyledCard>
              <DeploysContainer
                siteId={this.state.siteId}
                handleClose={this._closeDeploys}
              />
            </StyledCard>
          </BaseStyle>
        </Modal>
      </View>
        : <ImageLoader />;
  }

  _openDeploys = (siteId) => {
    this.setState({siteId})
  }

  _closeDeploys = () => {
    this.setState({siteId: null})
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
