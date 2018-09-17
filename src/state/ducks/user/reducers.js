import * as types from "./types";
import { createReducer } from "../../utils";

const initialState = {};

const signInReducer = createReducer(initialState)({
  [types.SIGN_IN]: (state, { token }) => {
    return {
      token
    };
  },

  [types.SIGN_IN_FAIL]: (state, { payload }) => ({
    signInFail: true
  }),

  [types.LOG_OUT]: (state, action) => {
    return initialState;
  }
});

export default signInReducer;
