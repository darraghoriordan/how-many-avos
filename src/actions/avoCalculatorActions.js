import * as types from './actionTypes';

export function updateAvoCalculatorSuccess(avoCalculator) {
    return {type: types.UPDATE_AVO_CALCULATOR_SUCCESS, data: avoCalculator};
}

export function updateAvoCalculator(avoCalculator) {
    return function (dispatch) {
        dispatch(updateAvoCalculatorSuccess(avoCalculator));
    }
}

