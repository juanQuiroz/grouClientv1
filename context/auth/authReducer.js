import { LOGIN_SUCCESS, LOGIN_ERROR } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // localStorage.setItem("token", action.payload.access_token);
      return {
        ...state,
        authtenticated: true,
        user: action.payload,
      };

    default:
      return state;
  }
};
