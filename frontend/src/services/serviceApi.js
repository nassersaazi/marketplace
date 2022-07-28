
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const serviceApiHeaders = {
  Authorization: localStorage.getItem('access_token')
    ? 'JWT ' + localStorage.getItem('access_token')
    : null,
  'Content-Type': 'application/json',
  accept: 'application/json',
}

const createRequest = (url) => ({ url, headers: serviceApiHeaders });

export const serviceApi = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
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