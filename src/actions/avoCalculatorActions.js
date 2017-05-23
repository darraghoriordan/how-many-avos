import * as types from './actionTypes';
import AvoCalculator from '../calculators/avoCalculator';

export function avoCalculatorResultSuccess(avoCalculatorResult) {
    return {type: types.AVO_CALCULATOR_RESULT_SUCCESS, data: avoCalculatorResult};
}

export function calculateResult(avoCalculatorParameters) {
    return function (dispatch) {
        let avoCalculator = new AvoCalculator();
        let avoCalculatorResults = avoCalculator.calculateResult(avoCalculatorParameters);

        dispatch(avoCalculatorResultSuccess(avoCalculatorResults));
    }
}

export function avoCalculatorParameterSuccess(avoCalculatorParameters) {
    return {type: types.AVO_CALCULATOR_PARAMETER_SUCCESS, data: avoCalculatorParameters};
}

export function updateParameters(avoCalculatorParameters) {
    return function (dispatch) {
        dispatch(avoCalculatorParameterSuccess(avoCalculatorParameters));

        let avoCalculator = new AvoCalculator();
        let avoCalculatorResults = avoCalculator.calculateResult(avoCalculatorParameters);

        dispatch(avoCalculatorResultSuccess(avoCalculatorResults));
    }
}
