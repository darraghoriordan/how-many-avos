import AvoCalculator from './avoCalculator';
import expect from 'expect';

it('calculates weekly savings correctly', () => {
    const params = {
        cost: 10,
        numberPerWeek: 3
    }
    let avoCalculator = new AvoCalculator();

    let expected = 30;

    let result = avoCalculator.calculateWeeklySavings(params);

    expect(result).toEqual(expected);
});

it('calculates weekly result correctly', () => {
    const params = {
        numberOfWeeksToDeposit: 52,
        weeklySavings: 250,
        deposit: 200000
    }

    let avoCalculator = new AvoCalculator();

    let result = avoCalculator.calculateResultForWeeklyItem(params.numberOfWeeksToDeposit,params.weeklySavings,params.deposit);
    expect(result.weeklySavings).toEqual(250)
    expect(result.percentTotalDeposit).toEqual(6.5);
    expect(result.timeBenefitInWeeks).toEqual(3.38);
    expect(result.timeBenefitInYears).toEqual(.065);
});
// it('calculates correctly', () => {     const avoCalculatorParameters = {
//    percentDepositRequired: 20,         personalWeeklySavings: 250,
// avoBreakfastCost: 20,         latteCost: 5,
// numberOfAvoBreakfastsPerWeek: 7,         numberOfLattesPerWeek: 14,
// housePrice: 1000000     }     const expectedResultWeeks = 435;     let result
// = avoCalculator.calculateResult(avoCalculatorParameters);
// expect(Math.round(result.numberOfWeeksToDeposit)).toEqual(expectedResultWeeks)
// ; });