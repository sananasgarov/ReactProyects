import { api } from "../api";

export const getAllCars = async () => {
  const res = await api.get("/cars");
  if (!res.data || res.data.length === 0) {
    throw new Error("Data yoxdu");
  }
  return res.data;
};

export const singleCar = async (id) => {
  const res = await api.get(`/cars/${id}`);
  if (!res.data) {
    throw new Error("Data yoxdu");
  }
  return res.data;
};
