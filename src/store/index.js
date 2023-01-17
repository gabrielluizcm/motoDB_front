import { legacy_createStore as createStore } from 'redux';

const initialState = {};

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

export default store;
