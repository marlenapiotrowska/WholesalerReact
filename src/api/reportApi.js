import axiosClient from "./axiosClient";

export const reportApi = {
    getCosts: (from, to) => 
    axiosClient.get("/raports/costs", {
      params: { from, to },
    }),
};