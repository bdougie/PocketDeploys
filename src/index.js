import React from 'react';
import {Provider} from "react-redux";
import {View, StatusBar} from 'react-native';
import Base from './containers/Base';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { entitiesReducer, queriesReducer, queryMiddleware } from 'redux-query';

import { composeWithDevTools } from 'remote-redux-devtools';

export const getQueries = (state) => state.queries;
export const getEntities = (state) => state.entities;

const reducer = combineReducers({
  entities: entitiesReducer,
  queries: queriesReducer,
});

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(queryMiddleware(getQueries, getEntities))
));

const Main = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        <Base />
      </Provider>
    </View>
  );
};

export default Main;
