import React from 'react';
import ReactDOM from 'react-dom';
import AvoCalculatorPage from './AvoCalculatorPage';
import {MemoryRouter} from 'react-router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
    <AvoCalculatorPage/>
  </ MemoryRouter>, div);
});