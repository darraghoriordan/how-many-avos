import React from 'react';
import ReactDOM from 'react-dom';
import AboutPage from './AboutPage';
import {MemoryRouter} from 'react-router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(    
  <MemoryRouter>
  <AboutPage />  
  </ MemoryRouter>, div);
});
