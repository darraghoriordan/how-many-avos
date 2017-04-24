import React from 'react';
import ReactDOM from 'react-dom';
import AvoCalculatorForm from './AvoCalculatorForm';
import {MemoryRouter} from 'react-router';

it('renders without crashing', () => {
    const div = document.createElement('div');

    const props = {
        avoCalculator: {
            housePice: 1000000,
            deposit: 200000
        },
         onChange: () => {}
    };

    ReactDOM.render(
        <MemoryRouter>
        <AvoCalculatorForm {...props}/>
    </ MemoryRouter>, div);
});