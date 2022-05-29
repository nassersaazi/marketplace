
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const createRequest = (url) => ({ url });

export const serviceApi = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => createRequest(`/services`),
    }),
    
    getServiceDetails: builder.query({
      query: (s_id) => createRequest(`/services/${s_id}`),
    }),
    
  }),
});

export const { useGetServicesQuery ,useGetServiceDetailsQuery} = serviceApi;