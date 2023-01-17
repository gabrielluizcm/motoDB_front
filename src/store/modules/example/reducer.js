import * as types from '../types';

const initialState = {};

// eslint-disable-next-line default-param-last
export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case types.EXAMPLE_SUCCESS: {
      const newState = { ...state };
      return newState;
    }
    case types.EXAMPLE_FAILURE:
    case types.EXAMPLE_REQUEST:
    default: {
      return state;
    }
  }
}
