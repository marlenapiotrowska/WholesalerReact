import axiosClient from "./axiosClient";

export const worktaskApi = {
    getNotAssigned: () => axiosClient.get("/worktasks/unassigned"),
    assignTask: (taskId, userId) => axiosClient.post(`/worktasks/${taskId}/actions/assign`, {userId})
};