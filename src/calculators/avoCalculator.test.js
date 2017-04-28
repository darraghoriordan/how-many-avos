import AvoCalculator from './avoCalculator';
import expect from 'expect';
describe('Avo calc tests', () => {
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

        let result = avoCalculator.calculateResultForWeeklyItem(params.numberOfWeeksToDeposit, params.weeklySavings, params.deposit);
        expect(result.weeklySavings).toEqual(250)
        expect(result.percentTotalDeposit).toEqual(6.5);
        expect(result.timeBenefitInWeeks).toEqual(3.38);
        expect(result.timeBenefitInYears).toEqual(.065);
    });
    it('calculates one off result correctly', () => {
        const params = {
            numberOfWeeksToDeposit: 52,
            oneOffSavings: 100000,
            deposit: 200000
        }

        let avoCalculator = new AvoCalculator();

        let result = avoCalculator.calculateResultForOneOffItem(params.numberOfWeeksToDeposit, params.oneOffSavings, params.deposit);

        expect(result.percentTotalDeposit).toEqual(50);
        expect(result.timeBenefitInWeeks).toEqual(26);
        expect(result.timeBenefitInYears).toEqual(0.5);
    });
});