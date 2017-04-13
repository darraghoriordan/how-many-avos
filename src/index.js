import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import configureStore from './configureStore';
import './index.css';
import App from './App';
import AppRoutes from './AppRoutes';
import {Provider} from 'react-redux';
import {loadCourses} from './actions/courseActions'
// this is where you could rehydrate from loclaStorage or api
const store = configureStore();

store.dispatch(loadCourses());

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
