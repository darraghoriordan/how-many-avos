import React from 'react';
import ReactDOM from 'react-dom';
import AvoCalculatorForm from './AvoCalculatorForm';
import {MemoryRouter} from 'react-router';

it('renders without crashing', () => {
    const div = document.createElement('div');

    const props = {

        avoCalculatorParameters: {
            percentDepositRequired: 20,
            personalWeeklySavings: 250,
            avoBreakfastCost: 20,
            latteCost: 5,
            numberOfAvoBreakfastsPerWeek: 7,
            numberOfLattesPerWeek: 14,
            housePrice: 1000000
        },
        onParameterChange: () => {}
    };

    ReactDOM.render(
        <MemoryRouter>
        <AvoCalculatorForm {...props}/>
    </ MemoryRouter>, div);
});