import React from 'react';
import ReactDOM from 'react-dom';
import CoursePage from './CoursePage';
import {MemoryRouter} from 'react-router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(    
  <MemoryRouter>
  <CoursePage />  
  </ MemoryRouter>, div);
});