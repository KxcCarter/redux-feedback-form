import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// ---
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const feelingsReducer = (state = '', action) => {
  if (action.type === 'SOMETHING') {
    return action.payload;
  }
  return state;
};

const understandingReducer = (state = '', action) => {
  if (action.type === 'SOMETHING') {
    return action.payload;
  }
  return state;
};

const supportReducer = (state = '', action) => {
  if (action.type === 'SOMETHING') {
    return action.payload;
  }
  return state;
};

const commentsReducer = (state = '', action) => {
  if (action.type === 'SOMETHING') {
    return action.payload;
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingsReducer,
    understandingReducer,
    supportReducer,
    commentsReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,

  document.getElementById('root')
);
registerServiceWorker();
