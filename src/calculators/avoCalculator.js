export default class AvoCalculator {
    calculateWeeklySavings(parameters) {
        if (parameters.numberPerWeek) {
            return (parameters.cost * parameters.numberPerWeek);
        }
        return parameters.cost;
    }

    calculateResultForOneOffItem(numberOfWeeksToDeposit, oneOffSavings, deposit) {
        let result = {
            percentTotalDeposit: 0,
            timeBenefitInWeeks: 0,
            timeBenefitInYears: 0
        }
        if (oneOffSavings <= 0) {
            return result;
        }
        result.percentTotalDeposit = (oneOffSavings / deposit) * 100;
        result.timeBenefitInWeeks = numberOfWeeksToDeposit * (result.percentTotalDeposit / 100);
        result.timeBenefitInYears = result.timeBenefitInWeeks / 52;

        return result;
    }

    calculateResultForWeeklyItem(numberOfWeeksToDeposit, weeklySavings, deposit) {
        let result = {}
        result.weeklySavings = weeklySavings;
        result.percentTotalDeposit = ((numberOfWeeksToDeposit * weeklySavings) / deposit) * 100;
        result.timeBenefitInWeeks = numberOfWeeksToDeposit * (result.percentTotalDeposit / 100);
        result.timeBenefitInYears = result.timeBenefitInWeeks / 52;

        return result;
    }
    calculateMonthlyMortgagePayment(avoCalculatorParameters, deposit) {
        // must be normalised to days to match bnz calculator.
        // then multiplied by the repayment scedule

        let n = avoCalculatorParameters.yearsOfMortgage * 365;
        let r = avoCalculatorParameters.yearlyMortgageRate / 365;
        let P = avoCalculatorParameters.housePrice - deposit;

        let dailyPayment = P * (r + r / (Math.pow(1+r,n) -1));
        return dailyPayment * 30.5;
    }
    calculateResult(avoCalculatorParameters) {
        let avoCalculatorResult = {
            yearsToDeposit: 0,
            numberOfWeeksToDeposit: 0,
            totalWeeklySavings: 0,
            deposit: 0,
            monthlyMortgagePayment: 0,
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
            parameters: {}
        }

        avoCalculatorResult.parameters = Object.assign({}, avoCalculatorParameters);

        avoCalculatorResult.deposit = avoCalculatorParameters.housePrice * (avoCalculatorParameters.percentDepositRequired / 100);
        avoCalculatorResult.personalSavings.weeklySavings = this.calculateWeeklySavings(avoCalculatorParameters.personalSavings);
        avoCalculatorResult.avoBreakfasts.weeklySavings = this.calculateWeeklySavings(avoCalculatorParameters.avoBreakfasts);
        avoCalculatorResult.lattes.weeklySavings = this.calculateWeeklySavings(avoCalculatorParameters.lattes);

        avoCalculatorResult.totalWeeklySavings = avoCalculatorResult.personalSavings.weeklySavings;
        avoCalculatorResult.totalWeeklySavings += avoCalculatorResult.avoBreakfasts.weeklySavings;
        avoCalculatorResult.totalWeeklySavings += avoCalculatorResult.lattes.weeklySavings;

        avoCalculatorResult.numberOfWeeksToDeposit = (avoCalculatorResult.deposit - avoCalculatorParameters.giftFromParents) / (avoCalculatorResult.totalWeeklySavings);
        avoCalculatorResult.yearsToDeposit = (avoCalculatorResult.numberOfWeeksToDeposit / 52);

        avoCalculatorResult.giftFromParents = this.calculateResultForOneOffItem(avoCalculatorResult.numberOfWeeksToDeposit, avoCalculatorParameters.giftFromParents, avoCalculatorResult.deposit);

        avoCalculatorResult.lattes = this.calculateResultForWeeklyItem(avoCalculatorResult.numberOfWeeksToDeposit, avoCalculatorResult.lattes.weeklySavings, avoCalculatorResult.deposit);
        avoCalculatorResult.personalSavings = this.calculateResultForWeeklyItem(avoCalculatorResult.numberOfWeeksToDeposit, avoCalculatorResult.personalSavings.weeklySavings, avoCalculatorResult.deposit);
        avoCalculatorResult.avoBreakfasts = this.calculateResultForWeeklyItem(avoCalculatorResult.numberOfWeeksToDeposit, avoCalculatorResult.avoBreakfasts.weeklySavings, avoCalculatorResult.deposit);

        avoCalculatorResult.monthlyMortgagePayment = this.calculateMonthlyMortgagePayment( avoCalculatorResult.parameters, avoCalculatorResult.deposit);
        return avoCalculatorResult;
    }
}