import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getEnvVariables } from '@/shared';
import { ICharacter, ICharacterResponse } from '@/interfaces';

const { VITE_API_URL } = getEnvVariables();

export const rickApi = createApi({
  reducerPath: 'rickAndMortyApi',

  baseQuery: fetchBaseQuery({ baseUrl: VITE_API_URL }),

  tagTypes: ['Characters', 'Character'],

  endpoints: build => ({
    getCharacters: build.query<ICharacterResponse, void>({
      query: () => '/character',
      providesTags: ['Characters'],
    }),

    getCharacter: build.query<ICharacter, void>({
      query: id => `/character/${id}`,
      providesTags: ['Character'],
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterQuery } = rickApi;
