import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { sessionService } from 'redux-react-session';


import App from './App';
import configureStore from './redux/configureStore';

// Configurating redux store
const options = {checked: false, authenticated: false};
const store = configureStore();
sessionService.initSessionService(store, options);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

