import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}`,
    prepareHeaders: async (headers: any) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["artists", "albums"],
  endpoints: () => ({}),
});
