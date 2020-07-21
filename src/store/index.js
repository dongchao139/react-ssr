import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';

const reducer = (state = { name: 'dell' }, action) => {
  return state;
}

export const getStore = () => {
  const store = createStore(reducer, applyMiddleware(thunk))
  return store;
}

