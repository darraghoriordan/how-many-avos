import * as types from './actionTypes';
import * as avoCalculator from '../calculators/avoCalculator';

export function avoCalculatorResultSuccess(avoCalculatorResult) {
    return {type: types.AVO_CALCULATOR_RESULT_SUCCESS, data: avoCalculatorResult};
}

export function calculateResult(avoCalculatorParameters) {
    return function (dispatch) {
       let avoCalculatorResults = avoCalculator.calculateResult(avoCalculatorParameters);

        dispatch(avoCalculatorResultSuccess(avoCalculatorResults));
    }
}
