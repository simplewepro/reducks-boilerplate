import * as types from "./types";
import { fetch } from "../../utils";
import { setAuthorizationHeader } from "./utils";
import { POST } from "@utilities";

export const userLoggedIn = token => ({
  type: types.SIGN_IN,
  token
});

export const userLogInFail = () => ({
  type: types.SIGN_IN_FAIL
});

export const userLoggedOut = () => ({
  type: types.LOG_OUT
});

export const login = data => dispatch =>
  fetch(POST, `PASTE_URL`, data)
    .then(({ data: { access_token } }) => {
      localStorage.jwt_token = access_token;
      setAuthorizationHeader(access_token);
      dispatch(userLoggedIn(access_token));
    })
    .catch(error => {
      dispatch(userLogInFail());

      console.error(error);
    });

export const logout = () => dispatch => {
  localStorage.removeItem("jwt_token");
  setAuthorizationHeader();
  dispatch(userLoggedOut());
};
