import api from "../api";


export const getAllProducts = async () => {
  const res = await api.get("/cars");
  if (!res.data) {
    throw new Error("Failed to fetch products");
  }
  return res.data.cars;
};
