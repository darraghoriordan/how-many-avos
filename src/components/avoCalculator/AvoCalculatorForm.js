import React from 'react';
import TextInput from '../common/TextInput';

const AvoCalculatorForm = ({avoCalculatorModel, onParameterChange}) => {
    return (
        <form>
            <TextInput
                name="housePrice"
                label="House Price"
                value={avoCalculatorModel
                .avoCalculatorParameters
                .housePrice
                .toString()} 
                onChange={onParameterChange}/>
            <TextInput
                name="deposit"
                label="Deposit (20% default)"
                value={avoCalculatorModel
                .avoCalculatorResult
                .deposit
                .toString()} 
                onChange={onParameterChange}/>

        </form>
    );
};

AvoCalculatorForm.propTypes = {
    avoCalculatorModel: React.PropTypes.object.isRequired,
    onParameterChange: React.PropTypes.func.isRequired
};

export default AvoCalculatorForm;