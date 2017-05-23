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
import {calculateResult} from './actions/avoCalculatorActions';
import '../node_modules/toastr/build/toastr.min.css';
import initialState from './reducers/initialState';
// this is where you could rehydrate from loclaStorage or api
const store = configureStore();

store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(calculateResult(initialState.avoCalculatorParameters));

ReactDOM.render((
<Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</Provider>),
  document.getElementById('root')
);
