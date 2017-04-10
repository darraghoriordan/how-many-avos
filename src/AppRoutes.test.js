import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import {MemoryRouter} from 'react-router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><AppRoutes /></MemoryRouter>, div);
});
