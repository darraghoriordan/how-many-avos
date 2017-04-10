import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import AppRoutes from './AppRoutes';

ReactDOM.render(
  (<BrowserRouter>
   <App>
      <AppRoutes/>
      </App>
</BrowserRouter>),
  document.getElementById('root')
);
