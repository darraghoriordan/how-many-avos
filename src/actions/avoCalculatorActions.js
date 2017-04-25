import * as types from './actionTypes';
import * as avoCalculator from '../calculators/avoCalculator';

export function updateAvoCalculatorSuccess(avoCalculator) {
    return {type: types.UPDATE_AVO_CALCULATOR_SUCCESS, data: avoCalculator};
}

export function updateAvoCalculator(avoCalculatorModel) {
    return function (dispatch) {
debugger;
        avoCalculatorModel.deposit = avoCalculator.calculateDeposit(avoCalculatorModel.housePrice, avoCalculatorModel.depositPercentageRequired);

        dispatch(updateAvoCalculatorSuccess(avoCalculatorModel));
    }
}
