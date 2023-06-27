import { ENDPOINTS } from "../constants";
import { http } from "../lib";
import { OrderT } from "../types";

export const Order = {
  create: async (data: OrderT) => {
    console.log(data);
    return await http.post(ENDPOINTS.ORDERS, JSON.stringify({ data: data }), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
