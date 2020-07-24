import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// ---
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// number from 1 - 5
const feelingReducer = (state = '', action) => {
  if (action.type === 'SET_FEELINGS') {
    return Number(action.payload);
  }
  return state;
};

// number from 1 - 5
const understandingReducer = (state = '', action) => {
  if (action.type === 'SET_UNDERSTAND') {
    return Number(action.payload);
  }
  return state;
};

// number from 1 - 5
const supportReducer = (state = '', action) => {
  if (action.type === 'SOMETHING') {
    return action.payload;
  }
  return state;
};

// string
const commentsReducer = (state = '', action) => {
  if (action.type === 'SOMETHING') {
    return action.payload;
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
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