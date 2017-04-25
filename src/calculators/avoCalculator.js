export function calculateResult(avoCalculatorParameters) {
    let avoCalculatorResult = {};

    avoCalculatorResult.deposit = avoCalculatorParameters.housePrice * (avoCalculatorParameters.percentDepositRequired / 100);
    avoCalculatorResult.personalWeeklySavings = avoCalculatorParameters.personalWeeklySavings;
    avoCalculatorResult.avoBreakfastWeeklySavings = avoCalculatorParameters.avoBreakfastCost * avoCalculatorParameters.numberOfAvoBreakfastsPerWeek;
    avoCalculatorResult.lattesWeeklySavings = avoCalculatorParameters.latteCost * avoCalculatorParameters.numberOfLattesPerWeek;

    avoCalculatorResult.totalWeeklySavings = avoCalculatorResult.personalWeeklySavings;
    avoCalculatorResult.totalWeeklySavings += avoCalculatorResult.avoBreakfastWeeklySavings;
    avoCalculatorResult.totalWeeklySavings += avoCalculatorResult.lattesWeeklySavings;

    avoCalculatorResult.numberOfWeeksToDeposit = avoCalculatorResult.deposit / (avoCalculatorResult.totalWeeklySavings);

    return avoCalculatorResult;
}