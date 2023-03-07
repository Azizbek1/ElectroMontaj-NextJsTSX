import { API_URL, getMenuCreate } from "src/api/configs/api.config";
import api from "src/api/interceptors";
import { IMenuCreate } from "./menu.props";

export const MenuService = {
  async createMenu(data: IMenuCreate) {
    const response = await api.post<any>(
	`${API_URL}${getMenuCreate("/create")}`, 
	data,
	);
    return response;
  },

  async getAll() {},
};
