import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getEnvVariables } from '@/shared';

const { VITE_API_URL } = getEnvVariables();

export const rickApi = createApi({
  reducerPath: 'rickAndMortyApi',

  baseQuery: fetchBaseQuery({ baseUrl: VITE_API_URL }),

  tagTypes: ['Characters'],

  endpoints: build => ({
    getCharacters: build.query({
      query: () => '/character',
      providesTags: ['Characters'],
    }),
  }),
});

export const { useGetCharactersQuery } = rickApi;
