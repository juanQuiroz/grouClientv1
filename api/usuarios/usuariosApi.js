import api from "../../config/axios";

// export const autenticar = async data => {
//   const res = await api.post("/auth/iniciarSesion", data, {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   });
//   return res.data;
// };

export const obtenerUsuarioActual = () =>
  api.get("/auth/miUsuario").then(res => res.data);

export const getUser = id =>
  api.get(`/usuarios/obtenerUsuario/${id}`).then(res => res.data);

export const updateUSer = ({ _id, ...updatedUser }) =>
  api.put(`/usuarios/${_id}`, updatedUser).then(res => res.data);
