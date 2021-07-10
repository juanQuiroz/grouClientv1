import axios from "axios";

const api = axios.create({
  baseURL: process.env.customKey,
  //baseURL: "http://localhost:4000/api/v1",
});

export default api;
