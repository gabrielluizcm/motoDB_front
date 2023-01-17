import * as types from '../types';

export function exampleRequest() {
  return {
    type: types.EXAMPLE_REQUEST,
  };
}

export function exampleSuccess() {
  return {
    type: types.EXAMPLE_SUCCESS,
  };
}

export function exampleFailure() {
  return {
    type: types.EXAMPLE_FAILURE,
  };
}
