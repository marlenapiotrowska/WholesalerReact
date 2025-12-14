import axiosClient from "./axiosClient";

export const storagesApi = {
    getAll: () => axiosClient.get("/storages")
};