import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';

const request = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(request);
    toast.success('Example success');
    yield put(actions.exampleSuccess());
  } catch (e) {
    toast.error('Example error');
    yield put(actions.exampleError());
  }
}

export default all([takeLatest(types.EXAMPLE_REQUEST, exampleRequest)]);
