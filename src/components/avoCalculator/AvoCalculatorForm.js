import React from 'react';
import TextInput from '../common/TextInput';
import {Form} from 'react-bootstrap';

const AvoCalculatorForm = ({avoCalculatorParameters, onParameterChange}) => {
    return (
        <Form horizontal>
            <TextInput
                name="housePrice"
                label="House Price $"
                value={avoCalculatorParameters
                .housePrice
                .toString()}
                onChange={onParameterChange}/>
            <TextInput
                name="percentDepositRequired"
                label="% Deposit Required"
                value={avoCalculatorParameters
                .percentDepositRequired
                .toString()}
                onChange={onParameterChange}/>
                         <TextInput
                name="giftFromParents"
                label=" #$*^%ing Huge Gift From Parents"
                value={avoCalculatorParameters
                .giftFromParents
                .toString()}
                onChange={onParameterChange}/>
            <TextInput
                name="lattes.numberPerWeek"
                label="# Lattes you drink per week"
                value={avoCalculatorParameters
                .lattes
                .numberPerWeek
                .toString()}
                onChange={onParameterChange}/>
            <TextInput
                name="avoBreakfasts.numberPerWeek"
                label="# Avo brekkies you smash per week"
                value={avoCalculatorParameters
                .avoBreakfasts
                .numberPerWeek
                .toString()}
                onChange={onParameterChange}/>
            <TextInput
                name="personalSavings.cost"
                label="Personal savings per week (be honest!)"
                value={avoCalculatorParameters
                .personalSavings
                .cost
                .toString()}
                onChange={onParameterChange}/>
   
        </Form>
    );
};

AvoCalculatorForm.propTypes = {
    avoCalculatorParameters: React.PropTypes.object.isRequired,
    onParameterChange: React.PropTypes.func.isRequired
};

export default AvoCalculatorForm;