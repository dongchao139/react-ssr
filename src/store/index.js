import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import {combineReducers} from 'redux';
import {reducer as homeReducer} from '../containers/Home/store';

const reducer = combineReducers({
  home: homeReducer
})

export const getStore = () => {
  const store = createStore(reducer, applyMiddleware(thunk))
  return store;
}

