// @flow

import {
  AUTHENTICATION_LOGIN_REQUESTED,
  AUTHENTICATION_LOGIN_SUCCESS,
  AUTHENTICATION_LOGIN_FAILURE,
  AUTHENTICATION_LOGOUT,
  AUTHENTICATION_TOKEN_CHECK_REQUESTED
} from "../constants/authentication";

export type Authentication = {
  isLoggedIn: boolean,
  token: ?number,
  isChecking: boolean
};

const defaultState: Authentication = {
  isLoggedIn: false,
  isChecking: false,
  token: undefined
};

const authentication = (
  state: Authentication = defaultState,
  action: any
): Authentication => {
  switch (action.type) {
    case AUTHENTICATION_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isChecking: false
      };

    case AUTHENTICATION_LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isChecking: false
      };

    case AUTHENTICATION_TOKEN_CHECK_REQUESTED:
    case AUTHENTICATION_LOGIN_REQUESTED:
      return {
        ...state,
        isChecking: true
      };

    case AUTHENTICATION_LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };

    default:
      return state;
  }
};

export default authentication;
