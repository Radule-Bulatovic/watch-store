import { ENDPOINTS } from "../constants";
import { http } from "../lib";
import { WatchT, StrapiResponseT } from "../types";

export const Watch = {
  all: async () =>
    await http.get<StrapiResponseT<WatchT[]>>(ENDPOINTS.WATCHES, {
      params: { populate: "*" },
    }),
  find: (id: string) =>
    http.get<StrapiResponseT<WatchT>>(ENDPOINTS.WATCHES + "/" + id),
};
