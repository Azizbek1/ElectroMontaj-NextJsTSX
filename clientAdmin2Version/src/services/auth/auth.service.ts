import axios from "axios";
import { API_URL, getUsersUrl } from "src/api/configs/api.config";
import api from "src/api/interceptors";
var config = {
  headers: { Accept: "application/json" },
};
export const AuthService = {
  async login(login: string, password: string) {
    const response = await api.post(
      `${API_URL}${getUsersUrl("/login")}`,
      {
        login,
        password,
      },
      config
    );
    return response;
  },
};
