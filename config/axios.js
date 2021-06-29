import axios from "axios";

const clienteAxios = axios.create({
  baseURL: process.env.customKey,
});

export default clienteAxios;
