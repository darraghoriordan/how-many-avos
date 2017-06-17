import React from 'react';
import {Table} from 'react-bootstrap';

const AvoCalculatorResult = ({avoCalculatorResults}) => {

    return (
        <div className="avocalculator-results">
            <p className="avocalculator-results__header">
                Calculate your order here:</p>

            <p>
                damn, you need a deposit of:
                <span className="avocalculator-results__value">
                    {avoCalculatorResults
                        .deposit
                        .toLocaleString("en-NZ", {
                            style: "currency",
                            currency: "NZD",
                            minimumFractionDigits: 2
                        })}</span>
            </p>
            <hr className="avocalculator-results__seperator"/>
            <p>
                with your #$*^%ing huge gift of
                <span className="avocalculator-results__value">{avoCalculatorResults
                        .giftFromParents
                        .amount
                        .toLocaleString("en-NZ", {
                            style: "currency",
                            currency: "NZD",
                            minimumFractionDigits: 2
                        })}</span>
            </p>
            <p>
                and
                <span className="avocalculator-results__value">{avoCalculatorResults
                        .personalSavings
                        .weeklySavings
                        .toLocaleString("en-NZ", {
                            style: "currency",
                            currency: "NZD",
                            minimumFractionDigits: 2
                        })}</span>&nbsp;weekly savings
            </p>
            <p>
                and saving
                <span className="avocalculator-results__value">{avoCalculatorResults
                        .lattes
                        .weeklySavings
                        .toLocaleString("en-NZ", {
                            style: "currency",
                            currency: "NZD",
                            minimumFractionDigits: 2
                        })}</span>&nbsp;on lattes
            </p>
            <p>
                and
                <span className="avocalculator-results__value">{avoCalculatorResults
                        .avoBreakfasts
                        .weeklySavings
                        .toLocaleString("en-NZ", {
                            style: "currency",
                            currency: "NZD",
                            minimumFractionDigits: 2
                        })}</span>&nbsp;on avo brekkies
            </p>
            <p>
                and total weekly savings of
                <span className="avocalculator-results__value">{avoCalculatorResults
                        .totalWeeklySavings
                        .toLocaleString("en-NZ", {
                            style: "currency",
                            currency: "NZD",
                            minimumFractionDigits: 2
                        })}</span>
            </p>
            <hr className="avocalculator-results__seperator"/>
            <p>
                You can save your deposit in {avoCalculatorResults
                    .numberOfWeeksToDeposit
                    .toFixed(2)}&nbsp;weeks! ({avoCalculatorResults
                    .yearsToDeposit
                    .toFixed(2)}&nbsp;years)
            </p>
            <p>
                Your mortgage payments will be
                <span className="avocalculator-results__value">{avoCalculatorResults
                        .monthlyMortgagePayment
                        .toLocaleString("en-NZ", {
                            style: "currency",
                            currency: "NZD",
                            minimumFractionDigits: 2
                        })}</span>
                per month
            </p>
            <hr className="avocalculator-results__seperator"/>
            <p>
                This house will really cost you {(avoCalculatorResults.monthlyMortgagePayment * 12 * 30).toLocaleString("en-NZ", {
                    style: "currency",
                    currency: "NZD",
                    minimumFractionDigits: 2
                })}
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