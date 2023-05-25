import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://imdb-api.com/' }),
  endpoints: (build) => ({
    getMovies: build.query({
      query: () => 'en/API/MostPopularMovies/k_vx2f1tac',
    }),
  }),
});
export const { useGetMoviesQuery } = moviesApi;