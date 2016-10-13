import React from 'react';
import { Provider } from 'react-redux';
import routes from './routes';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, useRouterHistory } from 'react-router';
import { createHistory } from 'history';
import configureStore from './configureStore';

const browserHistory = useRouterHistory(createHistory)({ basename: '/' });
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

export default () => (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
);
