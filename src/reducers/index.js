import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxStatus from './ajaxStatusReducer'
import avoCalculatorResults from './avoCalculatorResultsReducer';
import avoCalculatorParameters from './avoCalculatorParametersReducer';
const rootReducer = combineReducers({courses, authors, ajaxStatus, avoCalculatorResults, avoCalculatorParameters});

export default rootReducer;