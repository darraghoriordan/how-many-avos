import * as avoCalculator from './avoCalculator';
import expect from 'expect';

it('calculates correctly', () => {
    const avoCalculatorParameters = {
        percentDepositRequired: 20,
        personalWeeklySavings: 250,
        avoBreakfastCost: 20,
        latteCost: 5,
        numberOfAvoBreakfastsPerWeek: 7,
        numberOfLattesPerWeek: 14,
        housePrice: 1000000
    }
    const expectedResultWeeks = 435;

    let result = avoCalculator.calculateResult(avoCalculatorParameters);

    expect(Math.round(result.numberOfWeeksToDeposit)).toEqual(expectedResultWeeks);
});