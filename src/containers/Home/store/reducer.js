import { lensProp, set } from "ramda";

const defaultState = {
  name: 'dell',
  newsList: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'initHomeList':
      const lens = lensProp('newsList');
      return set(lens, action.payload)(state);
    default:
      return state;
  }
}

export default reducer;