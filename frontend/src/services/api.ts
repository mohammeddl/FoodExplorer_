import axios from "axios";

const API_URL = "http://localhost:8080/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const restaurantApi = {
  getAll: (params: any) => api.get("/restaurants/search", { params }),
  create: (data: any) => api.post("/restaurants", data),
  getById: (id: number) => api.get(`/restaurants/${id}`),
  delete: (id: number) => api.delete(`/restaurants/${id}`),
};

export default api;
