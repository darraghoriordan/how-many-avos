import React from 'react';
import {Table} from 'react-bootstrap';

const AvoCalculatorResult = ({avoCalculatorResults}) => {

    return (
        <div>
            <p>
                Damn, you need a deposit of ${avoCalculatorResults.deposit}
            </p>
            <p>
                with your fucking huge gift of ${avoCalculatorResults.parameters.giftFromParents}
            </p>
            <p>
                and ${avoCalculatorResults.personalSavings.weeklySavings}&nbsp;weekly savings
            </p>
            <p>
                and saving ${avoCalculatorResults.lattes.weeklySavings}&nbsp;on lattes ({avoCalculatorResults.parameters.lattes.numberPerWeek}&nbsp;lattes at ${avoCalculatorResults.parameters.lattes.cost})
            </p>
            <p>
                and ${avoCalculatorResults.avoBreakfasts.weeklySavings}&nbsp;on avo brekkies ({avoCalculatorResults.parameters.avoBreakfasts.numberPerWeek}&nbsp;brekkies at ${avoCalculatorResults.parameters.avoBreakfasts.cost})
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
            <p>
           Your mortgage payments will be ${avoCalculatorResults.monthlyMortgagePayment.toFixed(2)} per month
            </p>
            <p>
                  This house will really cost you ${(avoCalculatorResults.monthlyMortgagePayment * 12 * 30).toFixed(2)}
                </p>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Savings</th>
                        <th>Percent of deposit</th>
                        <th>Time saving (weeks)</th>
                        <th>Time saving (years)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Huge gift</td>
                        <td>{avoCalculatorResults
                                .giftFromParents
                                .percentTotalDeposit
                                .toFixed(2)}%</td>
                        <td>{avoCalculatorResults
                                .giftFromParents
                                .timeBenefitInWeeks
                                .toFixed(2)}</td>
                        <td>{avoCalculatorResults
                                .giftFromParents
                                .timeBenefitInYears
                                .toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Personal Savings</td>
                        <td>{avoCalculatorResults
                                .personalSavings
                                .percentTotalDeposit
                                .toFixed(2)}%</td>
                        <td>{avoCalculatorResults
                                .personalSavings
                                .timeBenefitInWeeks
                                .toFixed(2)}</td>
                        <td>{avoCalculatorResults
                                .personalSavings
                                .timeBenefitInYears
                                .toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Avo Brekkies</td>
                        <td>{avoCalculatorResults
                                .avoBreakfasts
                                .percentTotalDeposit
                                .toFixed(2)}%</td>
                        <td>{avoCalculatorResults
                                .avoBreakfasts
                                .timeBenefitInWeeks
                                .toFixed(2)}</td>
                        <td>{avoCalculatorResults
                                .avoBreakfasts
                                .timeBenefitInYears
                                .toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Lattes</td>
                        <td>{avoCalculatorResults
                                .lattes
                                .percentTotalDeposit
                                .toFixed(2)}%</td>
                        <td>{avoCalculatorResults
                                .lattes
                                .timeBenefitInWeeks
                                .toFixed(2)}</td>
                        <td>{avoCalculatorResults
                                .lattes
                                .timeBenefitInYears
                                .toFixed(2)}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

AvoCalculatorResult.propTypes = {
    avoCalculatorResults: React.PropTypes.object.isRequired
};

export default AvoCalculatorResult;