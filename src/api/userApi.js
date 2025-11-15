import axiosClient from "./axiosClient";

export const userApi = {
    login: (data) => axiosClient.post("/users/actions/login", data),
    register: (data) => axiosClient.post("/users", data)
};