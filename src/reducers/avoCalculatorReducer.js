import intitialState from './initialState';
import * as types from '../actions/actionTypes';
import avoCalculator from '../calculators/avoCalculator';

export default function avoCalculatorReducer(state = intitialState.avoCalculator, action) {
    switch (action.type) {
        case types.UPDATE_AVO_CALCULATOR_SUCCESS:
            const newCalc = Object.assign({}, action.avoCalculator);
            newCalc.deposit = avoCalculator.calculateDeposit(action.avoCalculator.housePrice, action.avoCalculator.depositPercentageRequired);
            return newCalc;
        default:
            return state;
    }
}