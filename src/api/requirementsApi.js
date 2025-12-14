import axiosClient from "./axiosClient";

export const requirementsApi = {
    add: (data) => axiosClient.post("/requirements", data),
    editQuantity: (id, quantity) => axiosClient.patch(`/requirements/${id}`, {quantity: Number(quantity)}),
    getByStatus: (status) => axiosClient.get("/requirements/byStatus", { params: { status }}),
    getAll: () => axiosClient.get("/requirements")
};