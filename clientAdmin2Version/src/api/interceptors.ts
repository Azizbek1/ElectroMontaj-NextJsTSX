import axios from "axios";
import { API_URL } from "./configs/api.config";
import {
  setLocalStorage,
} from "src/settings/localstorage/localStorage";
const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config: any) => {
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Handle errors of all responses
api.interceptors.response.use(
  (response) => {
    const { headers } = response;
    const session = headers[import.meta.env.VITE_APP_SESSION_KEY];
    if (session) setLocalStorage(import.meta.env.VITE_APP_SESSION_KEY, session);
    return response;
  },
  (err) => {
    // Erro network
    console.log(err);
  }
);

export default api;
