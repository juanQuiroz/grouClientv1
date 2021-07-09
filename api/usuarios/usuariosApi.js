import api from "../../config/axios";

export const autenticar = async () => {
  const res = await clienteAxios.post("/auth/iniciarSesion", data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return res.data;
};

export const getUsers = () => api.get("/usuarios").then(res => res.data);

export const getUser = id =>
  api.get(`/usuarios/obtenerUsuario/${id}`).then(res => res.data);

export const updateUSer = ({ _id, ...updatedUser }) =>
  api.put(`/usuarios/${_id}`, updatedUser).then(res => res.data);
