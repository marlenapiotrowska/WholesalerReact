import axiosClient from "./axiosClient";

export const customersApi = {
    getAll: () => axiosClient.get("/clients")
};