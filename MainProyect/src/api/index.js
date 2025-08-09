import axios from "axios";

const api = axios.create({
  baseURL: "https://68974a8c250b078c20417ec0.mockapi.io/:endpoint",
});

export default api;

