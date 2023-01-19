import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(axios.post, '/tokens', { email, password });
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Successfully logged in');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (e) {
    const errors = get(e, 'response.data.errors', [
      'Invalid email or password',
    ]);
    errors.map((error) => toast.error(`${error}`));
    yield put(actions.loginFailure());
  }
}

function persistRehydrate(payload) {
  const token = get(payload, 'auth.token', '');

  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

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
      if (storedEmail !== email) return yield put(actions.loginFailure());
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
      yield put(actions.loginFailure());
      return history.push('/login');
    }

    errors.map((error) => toast.error(`${error}`));

    return yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
