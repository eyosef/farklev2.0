import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';

// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root')
  );

registerServiceWorker();

