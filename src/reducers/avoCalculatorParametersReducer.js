import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function avoCalculatorParametersReducer(state = initialState.avoCalculatorParameters, action) {
    switch (action.type) {
        case types.AVO_CALCULATOR_PARAMETER_SUCCESS:
             let newState = Object.assign({}, action.data);
            return newState;
        default:
            return state;
    }
}