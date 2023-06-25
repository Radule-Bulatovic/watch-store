import { ENDPOINTS } from "../constants";
import { http } from "../lib";

export const Brand = {
  all: async () => await http.get(`${ENDPOINTS.BRANDS}?populate=*`),
  find: (id: string) =>
    http.get(
      `${ENDPOINTS.BRANDS}/${id}?populate=watches&populate=watches.photo&populate=logo`
    ),
};
