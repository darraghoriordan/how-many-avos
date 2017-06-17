import React from 'react';
import TextInput from '../common/TextInput';
import {Form} from 'react-bootstrap';

const AvoCalculatorForm = ({avoCalculatorParameters, onParameterChange}) => {
    return (
        <div className="avocalculator-form">
            <p className="avocalculator-form__header">Calculate your order here:</p>
            <Form horizontal>
                <TextInput
                    additionalClasses="avocalculator-form__generic-input avocalculator-form__houseprice"
                    name="housePrice"
                    label="house price ($)"
                    value={avoCalculatorParameters
                    .housePrice
                    .toString()}
                    onChange={onParameterChange}/>
                <TextInput
                    additionalClasses="avocalculator-form__generic-input"
                    name="percentDepositRequired"
                    label="% deposit required"
                    value={avoCalculatorParameters
                    .percentDepositRequired
                    .toString()}
                    onChange={onParameterChange}/>
                <TextInput
                    additionalClasses="avocalculator-form__generic-input"
                    name="giftFromParents"
                    label="parents #$*^%ing huge gift ($)"
                    value={avoCalculatorParameters
                    .giftFromParents
                    .toString()}
                    onChange={onParameterChange}/>
                <TextInput
                    additionalClasses="avocalculator-form__generic-input"
                    name="lattes.numberPerWeek"
                    label="# lattes you drink p/wk"
                    value={avoCalculatorParameters
                    .lattes
                    .numberPerWeek
                    .toString()}
                    onChange={onParameterChange}/>
                <TextInput
                    additionalClasses="avocalculator-form__generic-input"
                    name="avoBreakfasts.numberPerWeek"
                    label="# avo brekkies you smash p/wk"
                    value={avoCalculatorParameters
                    .avoBreakfasts
                    .numberPerWeek
                    .toString()}
                    onChange={onParameterChange}/>
                <TextInput
                    additionalClasses="avocalculator-form__generic-input"
                    name="personalSavings.cost"
                    label="personal savings p/wk ($)"
                    value={avoCalculatorParameters
                    .personalSavings
                    .cost
                    .toString()}
                    onChange={onParameterChange}/>

            </Form>
        </div>
    );
};

AvoCalculatorForm.propTypes = {
    avoCalculatorParameters: React.PropTypes.object.isRequired,
    onParameterChange: React.PropTypes.func.isRequired
};

export default AvoCalculatorForm;