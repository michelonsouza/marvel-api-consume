import produce from 'immer';

import * as types from '~/store/types';

const initialState = {
  characters: [],
  selectedCharacter: null,
  pagination: null,
  loading: false,
  theme: 'light',
};

export default function auth(state = initialState, action = {}) {
  return produce(state, draft => {
    switch (action.type) {
      case types.AUTHORIZATION_SUCCESS: {
        draft.characters = action.payload.characters;
        draft.pagination = action.payload.pagination;
        break;
      }
      case types.CHARACTER_REQUEST:
      case types.CHARACTERS_PAGINATION_REQUEST: {
        draft.loading = true;
        break;
      }
      case types.CHARACTERS_PAGINATION_SUCCESS: {
        draft.characters = action.payload.characters;
        draft.pagination = action.payload.pagination;
        draft.loading = false;
        break;
      }
      case types.CHARACTER_SUCCESS: {
        draft.selectedCharacter = action.payload.characters;
        draft.loading = false;
        break;
      }
      case types.CLEAR_CHARACTER_SELECTED: {
        draft.selectedCharacter = null;
        break;
      }
      case types.CHARACTER_FAILURE: {
        draft.loading = false;
        break;
      }
      case types.LOGOUT: {
        draft.characters = [];
        draft.selectedCharacter = null;
        draft.pagination = null;
        draft.loading = false;
        break;
      }
      case types.THEME_CHANGE: {
        draft.theme = action.payload.theme;
        break;
      }
      default:
    }
  });
}
