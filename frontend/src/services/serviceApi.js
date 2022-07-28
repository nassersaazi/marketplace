
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const createRequest = (url) => ({ url });

export const serviceApi = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3080/api" }),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => createRequest(`/services`),
    }),
    
    getServiceDetails: builder.query({
      query: (id) => createRequest(`/services/${id}`),
    }),
    
    getUsers: builder.query({
      query: () => createRequest(`/users`),
    }),
    
  }),
});

export const { useGetServicesQuery ,useGetServiceDetailsQuery,useGetUsersQuery} = serviceApi;