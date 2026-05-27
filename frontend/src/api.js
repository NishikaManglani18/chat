import axios from "axios";

const api = axios.create({
  baseURL: "https://chat-production-e9e5.up.railway.app",
  withCredentials: true,
});

export default api;