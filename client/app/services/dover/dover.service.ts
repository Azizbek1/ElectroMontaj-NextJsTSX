import api from "api";
import { getDoverUrl } from "api/configs";

export const DoverService = {
  async getAll() {
    return await api.get<any>(getDoverUrl(`/index`))
  },
};
