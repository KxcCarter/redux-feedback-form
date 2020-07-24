import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// ---
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const storeInstance = createStore(combineReducers({}), applyMiddleware(logger));

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,

  document.getElementById('root')
);
registerServiceWorker();
