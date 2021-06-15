import { LOGIN_SUCCESS, LOGIN_ERROR } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authtenticated: true,
      };

    default:
      return state;
  }
};
