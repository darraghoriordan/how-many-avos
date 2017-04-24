import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
/*eslint-disable-next-line import/default */
import configureStore from './store/configureStore';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import '../node_modules/toastr/build/toastr.min.css';

// this is where you could rehydrate from loclaStorage or api
const store = configureStore();

store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render((
<Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</Provider>),
  document.getElementById('root')
);
