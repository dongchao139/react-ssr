import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import {combineReducers} from 'redux';
import homeReducer from '../containers/Home/store/reducer';

const reducer = combineReducers({
  home: homeReducer
})

export const getStore = () => {
  const store = createStore(reducer, applyMiddleware(thunk))
  return store;
}

