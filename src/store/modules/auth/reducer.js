import produce from 'immer';

import * as types from '~/store/types';

const initialState = {
  private_key: null,
  public_key: null,
  loading: false,
  signed: false,
};

export default function auth(state = initialState, action = {}) {
  return produce(state, draft => {
    switch (action.type) {
      case types.AUTHORIZATION_REQUEST: {
        draft.loading = true;
        break;
      }
      case types.AUTHORIZATION_SUCCESS: {
        const { private_key, public_key } = action.payload;
        draft.private_key = private_key;
        draft.public_key = public_key;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case types.AUTHORIZATION_FAILURE: {
        draft.loading = false;
        break;
      }
      case types.LOGOUT: {
        draft.private_key = null;
        draft.public_key = null;
        draft.loading = false;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
