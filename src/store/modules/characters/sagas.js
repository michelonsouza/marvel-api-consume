import { all, put, call, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import * as types from '~/store/types';
import { paginationSuccess, characterFailure } from './actions';

export function* charactersPagination({ payload }) {
  try {
    const { characters, pagination } = yield select(state => state.characters);
    const { page } = payload;
    const offset = (page - 1) * pagination.limit;

    if (
      (page > 0 && page !== pagination.currentPage) ||
      page <= pagination.lastPage
    ) {
      const { data: response } = yield call(api.get, `/characters`, {
        params: {
          ...api.defaults.params,
          offset,
        },
      });

      const { total, count, results: newCharacters } = response.data;

      const newPagination = {
        ...pagination,
        offset,
        total,
        count,
        currentPage: page,
        lastPage: Math.round(total / pagination.limit),
      };

      yield put(paginationSuccess(newCharacters, newPagination));
    } else {
      yield put(paginationSuccess(characters, pagination));
    }
  } catch (error) {
    yield put(characterFailure());
    toast.error('Erro ao recuperar personagens');
  }
}

export default all([
  takeLatest(types.CHARACTERS_PAGINATION_REQUEST, charactersPagination),
]);
