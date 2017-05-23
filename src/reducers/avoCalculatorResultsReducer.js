import intitialState from './initialState';
import * as types from '../actions/actionTypes';

export default function avoCalculatorResultsReducer(state = intitialState.avoCalculatorResults, action) {
    switch (action.type) {
        case types.AVO_CALCULATOR_RESULT_SUCCESS:
            let newState = Object.assign({}, action.data);
            return newState;

        default:
            return state;
    }
}