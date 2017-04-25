import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxStatus from './ajaxStatusReducer'
import avoCalculator from './avoCalculatorReducer';

const rootReducer = combineReducers({courses, authors, ajaxStatus, avoCalculatorModel:avoCalculator});

export default rootReducer;