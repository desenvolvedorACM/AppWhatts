
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routing from './src/Routes';
import reducers from './src/reducers';

export default props => (
  <Provider store={createStore(reducers)}>
    <Routing />
  </Provider>
);

