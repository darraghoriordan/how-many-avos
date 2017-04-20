import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import configureStore from './configureStore';
import './index.css';
import App from './App';
import AppRoutes from './AppRoutes';
import {Provider} from 'react-redux';
import {loadCourses} from './actions/courseActions'
import {loadAuthors} from './actions/authorActions'
// this is where you could rehydrate from loclaStorage or api
const store = configureStore();

store.dispatch(loadCourses());
store.dispatch(loadAuthors());

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
