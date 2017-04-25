import React from 'react';
import TextInput from '../common/TextInput';

const AvoCalculatorForm = ({avoCalculatorModel, onParameterChange}) => {
    return (
        <div>
            <form>
                <TextInput
                    name="housePrice"
                    label="House Price $"
                    value={avoCalculatorModel
                    .avoCalculatorParameters
                    .housePrice
                    .toString()}
                    onChange={onParameterChange}/>
                <TextInput
                    name="percentDepositRequired"
                    label="% Deposit"
                    value={avoCalculatorModel
                    .avoCalculatorParameters
                    .percentDepositRequired
                    .toString()}
                    onChange={onParameterChange}/>

            </form>
          <p>
               Damn, you need a deposit of ${avoCalculatorModel.avoCalculatorResults.deposit}
            </p>
                <p>
              with ${avoCalculatorModel.avoCalculatorResults.personalWeeklySavings}&nbsp;weekly savings
            </p>
            <p>
                and saving ${avoCalculatorModel.avoCalculatorResults.lattesWeeklySavings}&nbsp;on lattes ({avoCalculatorModel.avoCalculatorParameters.numberOfLattesPerWeek}&nbsp;lattes at ${avoCalculatorModel.avoCalculatorParameters.latteCost})
            </p>
            <p>
                and ${avoCalculatorModel.avoCalculatorResults.avoBreakfastWeeklySavings}&nbsp;on avo brekkies ({avoCalculatorModel.avoCalculatorParameters.numberOfAvoBreakfastsPerWeek}&nbsp;brekkies at ${avoCalculatorModel.avoCalculatorParameters.avoBreakfastCost})
            </p>
        <p>
                Your total weekly savings will be ${avoCalculatorModel.avoCalculatorResults.totalWeeklySavings}
            </p>
                 <p>
                You can save your deposit in {avoCalculatorModel.avoCalculatorResults.numberOfWeeksToDeposit.toFixed(2)}&nbsp;weeks! ({(avoCalculatorModel.avoCalculatorResults.numberOfWeeksToDeposit / 52).toFixed(2)}&nbsp;years)
            </p>
        </div>

    );
};

AvoCalculatorForm.propTypes = {
    avoCalculatorModel: React.PropTypes.object.isRequired,
    onParameterChange: React.PropTypes.func.isRequired
};

export default AvoCalculatorForm;