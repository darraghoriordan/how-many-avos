import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    if (process.env.NODE_ENV === 'production') {
        return createStore(rootReducer, initialState, applyMiddleware(thunk, reduxImmutableStateInvariant()));
    } else {
        return createStore(rootReducer, initialState, applyMiddleware(thunk));
    }
}