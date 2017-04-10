import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store/configureStore';
import './index.css';
import App from './App';
import AppRoutes from './AppRoutes';
import {Provider} from 'react-redux';

// this is where you could rehydrate from loclaStorage or api
const store = configureStore();
ReactDOM.render((
<Provider store={store}>
  <BrowserRouter>
    <App>
      <AppRoutes/>
    </App>
  </BrowserRouter>
</Provider>),
  document.getElementById('root')
);
