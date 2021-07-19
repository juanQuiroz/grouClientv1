import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import tokenAuth from "../../config/tokenAuth";

import * as api from "../../api/usuarios/usuariosApi";

import { LOGIN_SUCCESS, LOGIN_ERROR, OBTENER_USUARIO } from "../../types";

// const tkn = localStorage.getItem("token");

const AuthState = props => {
  // Initial state, and save token gotten from localstorage

  const initialState = {
    // token: tkn,
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // // returns authenticated user
  // const authenticadedUser = async () => {
  //   const token = localStorage.getItem("token");

  //   if (token) {
  //     // using token taken fron localstorage
  //     tokenAuth(token); // use token as headers
  //   }
  // };

  // Cuando el usuario inicia sesion
  // const logIn = async data => {
  //   try {
  //     // authenticadedUser();
  //   } catch (error) {
  //     console.log(error);
  //     dispatch({
  //       type: LOGIN_ERROR,
  //       payload: false,
  //     });
  //   }
  // };

  const setUserData = data => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });
  };

  // Retorna el usuario autenticado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token) {
      // TODO: funcion para enviar el token por headers
      // Le pasamos el token obtenido de localStorage
      const bearertkn = `bearer ${token}`;
      tokenAuth(bearertkn);
    }
    try {
      const respuesta = await api.obtenerUsuarioActual();
      console.log(respuesta);

      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        user: state.user,
        setUserData,
        usuarioAutenticado,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
