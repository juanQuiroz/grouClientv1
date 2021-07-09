import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import tokenAuth from "../../config/tokenAuth";
import { useMutation } from "react-query";
import * as api from "../../api/usuarios/usuariosApi";

import { LOGIN_SUCCESS, LOGIN_ERROR } from "../../types";

// const tkn = localStorage.getItem("token");

const AuthState = props => {
  // Initial state, and save token gotten from localstorage

  const initialState = {
    // token: tkn,
    authenticaded: null,
    user: null,
    query: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

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
      // const res = await clienteAxios.post("/auth/iniciarSesion", data, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      // });

      // const query = useQuery("repoData", () =>
      //   fetch(
      //     "https://oishicanete.herokuapp.com/api/v1/auth/iniciarSesion",
      //     data,
      //   ).then(res => res.json()),
      // );

      const { data, isLoading } = useMutation("auth", api.autenticar);

      console.log(isLoading);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res,
      });

      // authenticadedUser();
    } catch (error) {
      console.log(error);
      const alerta = {
        msg: error,
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
        query: state.query,
        user: state.user,
        logIn,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
