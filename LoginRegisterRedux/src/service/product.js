import { api } from "../api/indesx";


export const getAllProducts = async () => {
  const res = await api.get("/products");
  if (!res.data) {
    throw new Error("Failed to fetch products");
  }
  return res.data.products;
};
