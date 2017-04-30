import intitialState from './initialState';
import * as types from '../actions/actionTypes';

export default function avoCalculatorReducer(state = intitialState.avoCalculatorParameters, action) {
    switch (action.type) {
        case types.AVO_CALCULATOR_RESULT_SUCCESS:
           // let newState = Object.assign({}, action.data.parameters);
          //  return newState;
          return state;
        default:
            return state;
    }
}