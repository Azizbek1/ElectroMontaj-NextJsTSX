import { API_URL, getMenuCreate } from "src/api/configs/api.config";
import api from "src/api/interceptors";
import { IMenuCreate } from "./menu.props";

export const MenuService = {
  async createMenu() {
    const response = await api.post<IMenuCreate>(
	`${API_URL}${getMenuCreate("/create")}`, 
	{
		name,
		url,
		icon
	},
	);
    return response;
  },

  async getAll() {},
};
