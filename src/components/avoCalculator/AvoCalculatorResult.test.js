import React from 'react';
import ReactDOM from 'react-dom';
import AvoCalculatorResult from './AvoCalculatorResult';
import {MemoryRouter} from 'react-router';

it('renders without crashing', () => {
    const div = document.createElement('div');

    const props = {
        avoCalculatorResults: {
            yearsToDeposit: 0,
            numberOfWeeksToDeposit: 0,
            totalWeeklySavings: 0,
            deposit: 0,
            lattes: {
                weeklySavings: 0,
                percentTotalDeposit: 0,
                timeBenefitInWeeks: 0,
                timeBenefitInYears: 0
            },
            avoBreakfasts: {
                weeklySavings: 0,
                percentTotalDeposit: 0,
                timeBenefitInWeeks: 0,
                timeBenefitInYears: 0
            },
            personalSavings: {
                weeklySavings: 0,
                percentTotalDeposit: 0,
                timeBenefitInWeeks: 0,
                timeBenefitInYears: 0
            },
            giftFromParents: {
                percentTotalDeposit: 0,
                timeBenefitInWeeks: 0,
                timeBenefitInYears: 0
            },
            parameters: {
                giftFromParents: 0,
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
                housePrice: 1000000

            }
        }
    };

    ReactDOM.render(
        <MemoryRouter>
        <AvoCalculatorResult avoCalculatorResults={props.avoCalculatorResults} />
    </ MemoryRouter>, div);
});