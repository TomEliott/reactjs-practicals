// @flow

import {
  AUTHENTICATION_LOGIN_FAILURE,
  AUTHENTICATION_LOGIN_SUCCESS
} from "../constants/authentication";

const authenticate = (email: string, password: string) => dispatch =>
  email === "qpre@msn.fr" && password === "reactislife"
    ? dispatch({ type: AUTHENTICATION_LOGIN_SUCCESS })
    : dispatch({ type: AUTHENTICATION_LOGIN_FAILURE });

export default authenticate;