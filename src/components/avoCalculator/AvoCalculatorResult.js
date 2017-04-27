import React from 'react';

const AvoCalculatorResult = ({avoCalculatorResults, avoCalculatorParameters}) => {
    return (
        <div>
            <p>
                Damn, you need a deposit of ${avoCalculatorResults.deposit}
            </p>
            <p>
                with your fucking huge gift of ${avoCalculatorParameters.giftFromParents}
            </p>
            <p>
                and ${avoCalculatorResults.personalSavings.weeklySavings}&nbsp;weekly savings
            </p>
            <p>
                and saving ${avoCalculatorResults.lattes.weeklySavings}&nbsp;on lattes ({avoCalculatorParameters.lattes.numberPerWeek}&nbsp;lattes at ${avoCalculatorParameters.lattes.cost})
            </p>
            <p>
                and ${avoCalculatorResults.avoBreakfasts.weeklySavings}&nbsp;on avo brekkies ({avoCalculatorParameters.avoBreakfasts.numberPerWeek}&nbsp;brekkies at ${avoCalculatorParameters.avoBreakfasts.cost})
            </p>
            <p>
                Your total weekly savings will be ${avoCalculatorResults.totalWeeklySavings}
            </p>
            <p>
                You can save your deposit in {avoCalculatorResults
                    .numberOfWeeksToDeposit
                    .toFixed(2)}&nbsp;weeks! ({avoCalculatorResults
                    .yearsToDeposit
                    .toFixed(2)}&nbsp;years)
            </p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Savings</th>
                        <th>Percent of deposit</th>
                        <th>Time saving</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Huge gift</td>
                        <td>{avoCalculatorResults
                                .giftFromParents.percentTotalDeposit
                                .toFixed(2)}%</td>
                        <td>{avoCalculatorResults
                                .giftFromParents.timeBenefitInWeeks
                                .toFixed(2)}</td>

                    </tr>
                    <tr>
                        <td>Personal Savings</td>
                        <td>{avoCalculatorResults
                                .personalSavings.percentTotalDeposit
                                .toFixed(2)}%</td>
                        <td>{avoCalculatorResults
                                .personalSavings.timeBenefitInWeeks
                                .toFixed(2)}</td>

                    </tr>
                    <tr>
                        <td>Avo Brekkies</td>
                        <td>{avoCalculatorResults
                                .avoBreakfasts.percentTotalDeposit
                                .toFixed(2)}%</td>
                        <td>{avoCalculatorResults
                                .avoBreakfasts.timeBenefitInWeeks
                                .toFixed(2)}</td>

                    </tr>
                    <tr>
                        <td>Lattes</td>
                        <td>{avoCalculatorResults
                                .lattes.percentTotalDeposit
                                .toFixed(2)}%</td>
                        <td>{avoCalculatorResults
                                .lattes.timeBenefitInWeeks
                                .toFixed(2)}</td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
};

AvoCalculatorResult.propTypes = {
    avoCalculatorResults: React.PropTypes.object.isRequired,
    avoCalculatorParameters: React.PropTypes.object.isRequired
};

export default AvoCalculatorResult;