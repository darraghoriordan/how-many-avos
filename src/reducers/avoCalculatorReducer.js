import intitialState from './initialState';
import * as types from '../actions/actionTypes';

export default function avoCalculatorReducer(state = intitialState.avoCalculator, action) {
    switch (action.type) {
        case types.UPDATE_AVO_CALCULATOR_SUCCESS:
            debugger;
            return Object.assign({}, action.data);
        default:
            return state;
    }
}