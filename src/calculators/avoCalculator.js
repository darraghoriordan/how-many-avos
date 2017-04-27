export default class AvoCalculator {
    calculateWeeklySavings(parameters) {
        if (parameters.numberPerWeek) {
            return parameters.cost * parameters.numberPerWeek;
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
        result.timeBenefitInWeeks = numberOfWeeksToDeposit * (result.percentTotalForLattes / 100);
        result.timeBenefitInYears = result.timeBenefitInWeeks / 52;
    }

    calculateResult(avoCalculatorParameters) {
        let avoCalculatorResult =  {
            yearsToDeposit: 0,
            numberOfWeeksToDeposit: 0,
            totalWeeklySavings: 0,
            deposit: 0,
            lattes: {},
            avoBreakfasts: {},
            personalSavings: {},
            giftFromParents: {}
        }

        avoCalculatorResult.deposit = avoCalculatorParameters.housePrice * (avoCalculatorParameters.percentDepositRequired / 100);
        avoCalculatorResult.personalSavings.weeklySavings = this.calculateWeeklySavings(avoCalculatorParameters.personalWeeklySavings);
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

        return avoCalculatorResult;
    }
}