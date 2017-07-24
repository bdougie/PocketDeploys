import React from 'react'
import { View, StatusBar, Component } from 'react-native'
import Base from './containers/Base';
import { ApolloClient, ApolloProvider } from 'react-apollo';
import {createNetworkInterface} from 'apollo-client';

// https://github.com/apollographql/GitHub-GraphQL-API-Example/blob/master/App.js

const networkInterface = createNetworkInterface({uri: 'https://qkvvwzq8p.lp.gql.zone/graphql'});
const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: r => r.id,
});

const Main = () => {
  return (
    <ApolloProvider client={client}>
      <View>
        <Base />
      </View>
    </ApolloProvider>
  )
}

export default Main;
