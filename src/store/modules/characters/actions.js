import * as types from '~/store/types';

export function characterRequest(id) {
  return {
    type: types.CHARACTER_REQUEST,
    payload: { id },
  };
}

export function characterSuccess(character) {
  return {
    type: types.CHARACTER_SUCCESS,
    payload: { character },
  };
}

export function characterFailure() {
  return {
    type: types.CHARACTER_FAILURE,
  };
}

export function clearCharSelected() {
  return {
    type: types.CLEAR_CHARACTER_SELECTED,
  };
}

export function paginationRequest(page) {
  return {
    type: types.CHARACTERS_PAGINATION_REQUEST,
    payload: { page },
  };
}

export function paginationSuccess(characters, pagination) {
  return {
    type: types.CHARACTERS_PAGINATION_SUCCESS,
    payload: { characters, pagination },
  };
}
