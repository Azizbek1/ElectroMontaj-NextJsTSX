import { API_URL, getMenuUrl } from "src/api/configs/api.config";
import api from "src/api/interceptors";
import { IMenuCreate } from "./menu.props";

export const MenuService = {
  async create(data: IMenuCreate) {
    const response = await api.post<any>(
      `${API_URL}${getMenuUrl("/create")}`,
      data
    );
    return response;
  },

  async getAll(searchTerm?: string) {
    return api.get<any>(getMenuUrl(`/index`), {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });
  },
  async update(id: string, data: any) {
    return api.post<any>(getMenuUrl(`/edit/${id}`), data);
  },
  async delete(id: string) {
    return api.delete<string>(getMenuUrl(`/delete/${id}`));
  },
};
