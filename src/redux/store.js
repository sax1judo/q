import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const initialState = {};
const middleware = [thunk];
const rootReducer = combineReducers({
    reducer: reducer
});
const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));
// const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));

export default store;