import * as types from '~/store/types';

export function authorizationRequest(private_key, public_key) {
  return {
    type: types.AUTHORIZATION_REQUEST,
    payload: { private_key, public_key },
  };
}

export function authorizationSuccess(
  private_key,
  public_key,
  characters,
  pagination
) {
  return {
    type: types.AUTHORIZATION_SUCCESS,
    payload: { private_key, public_key, characters, pagination },
  };
}

export function authorizationFailure() {
  return {
    type: types.AUTHORIZATION_FAILURE,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}
