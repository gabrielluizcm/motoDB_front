import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as authActions from '../auth/actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* registerRequest({ payload }) {
  const { storedId: id, name, email, password, storedEmail } = payload;

  try {
    if (id) {
      yield call(axios.put, '/users', {
        name,
        email,
        password: password || undefined,
      });
      toast.success('Changes saved successfully');
      yield put(actions.registerUpdateSuccess(payload));
      if (storedEmail !== email) return yield put(authActions.loginFailure());
      return true;
    }

    yield call(axios.post, '/users', {
      name,
      email,
      password,
    });
    toast.success('Account created successfully');
    yield put(actions.registerCreateSuccess());
    return history.push('/login');
  } catch (e) {
    const errors = get(e, 'response.data.errors', [
      'Unable to process request at this moment',
    ]);
    const status = get(e, 'response.status', 500);

    if (status === 401) {
      toast.warning('You need to log in again');
      yield put(authActions.loginFailure());
      return history.push('/login');
    }

    errors.map((error) => toast.error(`${error}`));

    return yield put(actions.registerFailure());
  }
}

export default all([takeLatest(types.REGISTER_REQUEST, registerRequest)]);
