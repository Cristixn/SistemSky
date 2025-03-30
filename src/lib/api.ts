// src/lib/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getSalesData: builder.query({
      query: (params) => ({ url: "sales", params }),
    }),
    // Otros endpoints...
  }),
});

export const { useGetSalesDataQuery } = api;
