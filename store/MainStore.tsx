import { createStore, combineReducers, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';

import authReducer from './reducers/Auth'

const rootReducer = combineReducers({
    auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, /*applyMiddleware(ReduxThunk)*/);
  