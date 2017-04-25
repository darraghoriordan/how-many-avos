import React from 'react';
import ReactDOM from 'react-dom';
import AvoCalculatorForm from './AvoCalculatorForm';
import {MemoryRouter} from 'react-router';

it('renders without crashing', () => {
    const div = document.createElement('div');

    const props = {
        avoCalculatorModel: {
            avoCalculatorParameters: {
                percentDepositRequired: 20,
                personalWeeklySavings: 250,
                avoBreakfastCost: 20,
                latteCost: 5,
                numberOfAvoBreakfastsPerWeek: 7,
                numberOfLattesPerWeek: 14,
                housePrice: 1000000
            },
            avoCalculatorResult: {
                numberOfWeeksToDeposit: 0,
                totalWeeklySavings: 0,
                lattesWeeklySavings: 0,
                avoBreakfastWeeklySavings: 0,
                personalWeeklySavings: 0,
                deposit: 0
            }
        },
        onParameterChange: () => {}
    };

    ReactDOM.render(
        <MemoryRouter>
        <AvoCalculatorForm {...props}/>
    </ MemoryRouter>, div);
});