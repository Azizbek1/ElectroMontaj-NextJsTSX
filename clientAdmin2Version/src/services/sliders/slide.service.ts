import { API_URL, getSlideUrl } from "src/api/configs/api.config";
import api from "src/api/interceptors";
import { ISlideCreate } from "./slide.props";

export const SlideService = {
  async create(data: ISlideCreate) {
    const response = await api.post<any>(
      `${API_URL}${getSlideUrl("/create")}`,
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
