import api from "api";
import { getSlideUrl } from "api/configs";

export const SlideService = {
  async getAll() {
    return await api.get<any>(getSlideUrl(`/index`))
  },
};
