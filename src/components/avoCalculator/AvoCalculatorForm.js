import React from 'react';
import TextInput from '../common/TextInput';

const AvoCalculatorForm = ({avoCalculator, onChange}) => {
    return (
        <form>
            <TextInput
            name="housePrice"
            label="House Price"
            value={avoCalculator.housePrice.toString()}
            onChange={onChange}/>
            <TextInput
            name="deposit"
            label="Deposit (20% default)"
            value={avoCalculator.deposit.toString()}
            onChange={onChange}/>

        </form>
    );
};

AvoCalculatorForm.propTypes = {
    avoCalculator: React.PropTypes.object.isRequired,
      onChange: React.PropTypes.func.isRequired
};

export default AvoCalculatorForm;