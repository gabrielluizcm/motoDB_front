import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      return newState;
    }
    case types.LOGOUT_REQUEST:
    case types.LOGIN_FAILURE: {
      return initialState;
    }
    case types.REGISTER_UPDATE_SUCCESS: {
      const newState = { ...state };
      newState.user.name = action.payload.name;
      newState.user.email = action.payload.email;
      newState.isLoading = false;
      return newState;
    }
    default: {
      return state;
    }
  }
};
