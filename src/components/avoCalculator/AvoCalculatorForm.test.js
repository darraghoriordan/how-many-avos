import React from 'react';
import ReactDOM from 'react-dom';
import AvoCalculatorForm from './AvoCalculatorForm';
import {MemoryRouter} from 'react-router';

it('renders without crashing', () => {
    const div = document.createElement('div');

    const props = {
        avoCalculatorParameters: {

            percentDepositRequired: 20,
            lattes: {
                cost: 5,
                numberPerWeek: 7
            },
            avoBreakfasts: {
                cost: 20,
                numberPerWeek: 3
            },
            personalSavings: {
                cost: 250,
                numberPerWeek: 1
            },
            housePrice: 1000000,
            giftFromParents: 0
        },
        onParameterChange: () => {}
    };

    ReactDOM.render(
        <MemoryRouter>
        <AvoCalculatorForm {...props}/>
    </ MemoryRouter>, div);
});