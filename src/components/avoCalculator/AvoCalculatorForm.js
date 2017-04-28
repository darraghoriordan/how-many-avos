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
            <TextInput
                name="lattes.numberPerWeek"
                label="# Lattes per week"
                value={avoCalculatorParameters
                .lattes
                .numberPerWeek
                .toString()}
                onChange={onParameterChange}/>
            <TextInput
                name="avoBreakfasts.numberPerWeek"
                label="# Avo Brekkies per week"
                value={avoCalculatorParameters
                .avoBreakfasts
                .numberPerWeek
                .toString()}
                onChange={onParameterChange}/>
            <TextInput
                name="personalSavings.cost"
                label="Personal savings"
                value={avoCalculatorParameters
                .personalSavings
                .cost
                .toString()}
                onChange={onParameterChange}/>
            <TextInput
                name="giftFromParents"
                label="Huge Gift From Parents"
                value={avoCalculatorParameters
                .giftFromParents
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