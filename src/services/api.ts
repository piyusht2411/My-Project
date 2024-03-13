import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getToDoById: builder.query<Todo, number>({
      query: (id) => `todos`
    })
  })
});

export const { useGetToDoByIdQuery } = api;
