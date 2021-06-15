import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

import { LOGIN_SUCCESS, LOGIN_ERROR } from "../../types";

// const tkn = localStorage.getItem("token");

const AuthState = props => {
  // Initial state, and save token gotten from localstorage

  const initialState = {
    // token: tkn,
    authenticaded: null,
    user: null,
  };

  const [state, dipatach] = useReducer(authReducer, initialState);

  // returns authenticated user
  const authenticadedUser = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      // using token taken fron localstorage
      tokenAuth(token); // use token as headers
    }
  };

  // Cuando el usuario inicia sesion
  const logIn = async data => {
    try {
      const res = await clienteAxios.post("/api/auth/login", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data,
      });

      authenticadedUser();
    } catch (error) {
      console.log(error.response.data.msg);
      const alerta = {
        msg: error.response.data.msg,
        classname: "bg-red-400 p-4 rounded font-bold shadow-md text-center",
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alerta,
      });
    }
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticaded: state.authenticaded,
        user: state.user,
        logIn,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
