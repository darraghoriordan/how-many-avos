import React from 'react';
import ReactDOM from 'react-dom';
import ItemPriceClock from './ItemPriceClock';
import {MemoryRouter} from 'react-router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
        <ItemPriceClock />  
    </ MemoryRouter>, div);
});
