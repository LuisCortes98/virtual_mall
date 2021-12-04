import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import { sharedReducer } from './shared/Reducers';

const allReducers = combineReducers({
    shared: sharedReducer,
});

const root = (state, action) => {
    return allReducers(state, action);
}

const Store = () => createStore(root, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(Store);