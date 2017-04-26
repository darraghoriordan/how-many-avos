import React from 'react';

const AvoCalculatorResult = ({avoCalculatorResults, avoCalculatorParameters}) => {
    return (
        <div>
            <p>
                Damn, you need a deposit of ${avoCalculatorResults.deposit}
            </p>
            <p>
                with ${avoCalculatorResults.personalWeeklySavings}&nbsp;weekly savings
            </p>
            <p>
                and saving ${avoCalculatorResults.lattesWeeklySavings}&nbsp;on lattes ({avoCalculatorParameters.numberOfLattesPerWeek}&nbsp;lattes at ${avoCalculatorParameters.latteCost})
            </p>
            <p>
                and ${avoCalculatorResults.avoBreakfastWeeklySavings}&nbsp;on avo brekkies ({avoCalculatorParameters.numberOfAvoBreakfastsPerWeek}&nbsp;brekkies at ${avoCalculatorParameters.avoBreakfastCost})
            </p>
            <p>
                Your total weekly savings will be ${avoCalculatorResults.totalWeeklySavings}
            </p>
            <p>
                You can save your deposit in {avoCalculatorResults
                    .numberOfWeeksToDeposit
                    .toFixed(2)}&nbsp;weeks! ({(avoCalculatorResults.numberOfWeeksToDeposit / 52).toFixed(2)}&nbsp;years)
            </p>
        </div>
    );
};

AvoCalculatorResult.propTypes = {
    avoCalculatorResults: React.PropTypes.object.isRequired,
    avoCalculatorParameters: React.PropTypes.object.isRequired
};

export default AvoCalculatorResult;