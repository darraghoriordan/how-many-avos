import React from 'react';

const AvoCalculatorResult = ({avoCalculatorResults}) => {

    return (
        <div className="avocalculator-results">
            <h2 className="avocalculator-results__header">
                Your order summary:</h2>

            <p>
                damn, you need a deposit of:
                <span className="avocalculator-results__deposit-value">
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
                with your #$*^%ing huge gift</p><p>of&nbsp;
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
                and&nbsp;
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
                and saving&nbsp;
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
                and&nbsp;
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
                and total weekly savings of&nbsp;
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
                You can save your deposit in <span className="avocalculator-results__total-years">{avoCalculatorResults
                    .yearsToDeposit
                    .toFixed(2)}&nbsp;years</span>
            </p>
            <p>
                Your mortgage payments will be</p><p>
                <span className="avocalculator-results__value">{avoCalculatorResults
                        .monthlyMortgagePayment
                        .toLocaleString("en-NZ", {
                            style: "currency",
                            currency: "NZD",
                            minimumFractionDigits: 2
                        })}
                &nbsp;per month</span>
            </p>
            <hr className="avocalculator-results__seperator"/>
            <p>
                This house will really cost you <span className="avocalculator-results__total-cost">{(avoCalculatorResults.monthlyMortgagePayment * 12 * 30).toLocaleString("en-NZ", {
                    style: "currency",
                    currency: "NZD",
                    minimumFractionDigits: 2
                })}</span>
            </p>
        </div>
    );
};

AvoCalculatorResult.propTypes = {
    avoCalculatorResults: React.PropTypes.object.isRequired
};

export default AvoCalculatorResult;