import clienteAxios from "./axios";

const tokenAuth = token => {
  // if token exists put it as header
  if (token) {
    clienteAxios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete clienteAxios.defaults.headers.common["x-auth-token"];
  }
};

export default tokenAuth;
