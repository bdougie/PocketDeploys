import React from 'react';
import {Provider} from "react-redux";
import {View, StatusBar} from 'react-native';
import Base from './containers/Base';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { entitiesReducer, queriesReducer, queryMiddleware } from 'redux-query';

export const getQueries = (state) => state.queries;
export const getEntities = (state) => state.entities;

const reducer = combineReducers({
    entities: entitiesReducer,
    queries: queriesReducer,
});

const store = createStore(
    reducer,
    applyMiddleware(queryMiddleware(getQueries, getEntities))
);

const Main = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        <Base store={store} />
      </Provider>
    </View>
  );
};

export default Main;
