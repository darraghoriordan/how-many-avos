import React from 'react';
import TextInput from '../common/TextInput';

const AvoCalculatorForm = ({avoCalculatorParameters, onParameterChange}) => {
    return (
        <form>
            <TextInput
                name="housePrice"
                label="House Price $"
                value={avoCalculatorParameters
                .housePrice
                .toString()}
                onChange={onParameterChange}/>
            <TextInput
                name="percentDepositRequired"
                label="% Deposit"
                value={avoCalculatorParameters
                .percentDepositRequired
                .toString()}
                onChange={onParameterChange}/>
        </form>
    );
};

AvoCalculatorForm.propTypes = {
    avoCalculatorParameters: React.PropTypes.object.isRequired,
    onParameterChange: React.PropTypes.func.isRequired
};

export default AvoCalculatorForm;