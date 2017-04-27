import AvoCalculator from './avoCalculator';
import expect from 'expect';

it('calculates weekly savings correctly', () => {
    const params = {
        cost: 10,
        numberPerWeek: 3
    }
    let avoCalculator = new AvoCalculator();

    let expected = 30;

    let result = avoCalculator.calculateWeeklySavings(parms);

    expect(result).toEqual(expected);
});

it('calculates one off result correctly', () => {
    const params = {
        numberOfWeeksToDeposit:52, 
        oneOffSavings:100, 
        deposit:200
    }

    let avoCalculator = new AvoCalculator();

    let result = avoCalculator.calculateWeeklySavings(parms);

    expect(result.percentTotalDeposit).toEqual(50);
     expect(result.timeBenefitInWeeks).toEqual(26);
      expect(result.timeBenefitInYears).toEqual(0.5);
});
// it('calculates correctly', () => {
//     const avoCalculatorParameters = {
//         percentDepositRequired: 20,
//         personalWeeklySavings: 250,
//         avoBreakfastCost: 20,
//         latteCost: 5,
//         numberOfAvoBreakfastsPerWeek: 7,
//         numberOfLattesPerWeek: 14,
//         housePrice: 1000000
//     }
//     const expectedResultWeeks = 435;

//     let result = avoCalculator.calculateResult(avoCalculatorParameters);

//     expect(Math.round(result.numberOfWeeksToDeposit)).toEqual(expectedResultWeeks);
// });