import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import todoReducer from './todo/index';
import modalReducer from './modal/index';
import authReducer from './auth/index';

const middlewares = [];

export const rootReducers = combineReducers ({ 
    todoReducer,
    modalReducer,
    authReducer
});

export const configureStore = (initState) => {
    const store = createStore(rootReducers, initState, composeWithDevTools(applyMiddleware(thunk, ...middlewares)));
    return store;
}