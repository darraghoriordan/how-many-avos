import React from 'react';
import ReactDOM from 'react-dom';
import HousePriceClock from './HousePriceClock';
import {MemoryRouter} from 'react-router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
        <HousePriceClock />  
    </ MemoryRouter>, div);
});
