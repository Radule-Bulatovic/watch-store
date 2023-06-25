import { ENDPOINTS } from "../constants";
import { http } from "../lib";

export const Watch = {
  all: async () => await http.get(`${ENDPOINTS.WATCHES}?populate=*`),
  find: (id: string) => http.get(ENDPOINTS.WATCHES + "/" + id),
};
