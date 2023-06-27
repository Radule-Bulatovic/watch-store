import { ENDPOINTS } from "../constants";
import { http } from "../lib";
import { BrandT, StrapiResponseT } from "../types";

export const Brand = {
  all: async () =>
    await http.get<StrapiResponseT<BrandT[]>>(ENDPOINTS.BRANDS, {
      params: { populate: ["watches", "watches.photo", "logo"] },
    }),
  find: (id: string) =>
    http.get<StrapiResponseT<BrandT>>(`${ENDPOINTS.BRANDS}/${id}`, {
      params: {
        populate: ["watches", "watches.photo", "logo"],
      },
    }),
};
