import { API_URL, getNewsUrl, getSlideUrl } from "src/api/configs/api.config";
import api from "src/api/interceptors";
import { INewsCreate } from "./news.props";

export const NewsService = {
  async create(data: INewsCreate) {
    const response = await api.post<any>(
      `${API_URL}${getNewsUrl("/create")}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  },
};
