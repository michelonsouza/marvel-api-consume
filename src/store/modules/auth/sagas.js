import { all, put, call, takeLatest } from 'redux-saga/effects';
import md5 from 'md5';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import * as types from '~/store/types';
import { authorizationFailure, authorizationSuccess } from './actions';

export function* auth({ payload }) {
  try {
    const { private_key, public_key } = payload;
    const timestamp = new Date().getTime();
    const stringForHash = timestamp + private_key + public_key;
    const hash = md5(stringForHash);

    const { data: response } = yield call(api.get, '/characters', {
      params: {
        ts: timestamp,
        apikey: public_key,
        hash,
      },
    });

    const { offset, limit, total, count, results: characters } = response.data;
    const pagination = {
      offset,
      limit,
      total,
      count,
      currentPage: 1,
      lastPage: Math.ceil(total / limit),
    };

    api.defaults.params = {
      ts: timestamp,
      apikey: public_key,
      hash,
    };

    yield put(
      authorizationSuccess(private_key, public_key, characters, pagination)
    );

    toast.success('Autenticação bem sucedida');
    history.push('/characters');
  } catch (error) {
    yield put(authorizationFailure());
    toast.error('Public key e/ou Private Key são inválidas');
  }
}

function setDefaultParams({ payload }) {
  if (payload) {
    const { auth: authReducer } = payload;

    if (authReducer) {
      const { private_key, public_key } = authReducer;
      const timestamp = new Date().getTime();
      const stringForHash = timestamp + private_key + public_key;
      const hash = md5(stringForHash);

      api.defaults.params = {
        ts: timestamp,
        apikey: public_key,
        hash,
      };
    }
  }
}

export default all([
  takeLatest(types.AUTHORIZATION_REQUEST, auth),
  takeLatest('persist/REHYDRATE', setDefaultParams),
]);
