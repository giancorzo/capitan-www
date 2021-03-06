'use strict';


import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/root';
import configureStore from './store/configure';
import 'react-mdl/extra/material'; // Import MDL javascript


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);


const hash = window.location.hash.slice(1);

if (hash && /^(problems|challenges|groups)/.test(hash)) {
  window.history.pushState({}, '', '/' + hash);
}


render((
  <Root store={store} history={history} />
), document.getElementById('root'));
