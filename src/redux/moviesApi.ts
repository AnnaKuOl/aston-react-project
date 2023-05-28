import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { FullMovieDataClient, FullMovieDataServer, ShortMovieDataClient, ShortMovieDataServer } from '../types/types';



export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://imdb-api.com/' }),
  endpoints: (build) => ({
    getMovies: build.query<ShortMovieDataClient[], string>({
      query: () => 'en/API/MostPopularMovies/k_vx2f1tac',
      transformResponse: (response: { items: ShortMovieDataServer[] } ) =>
        response.items.map(item=>({
          id: item.id,
          image: item.image,
          title: item.title,
          rating: item.imDbRating,
          year: item.year,
        })),
    }),

    getMovie: build.query<FullMovieDataClient, string>({
      query: (id:string ) => `en/API/Title/k_vx2f1tac/${id}`,
      transformResponse: (response: FullMovieDataServer) => ({
        actors: response.actorList.map((actor) => actor.name),
        companies: response.companies,
        countries: response.countries,
        directors: response.directors,
        genres: response.genres,
        id: response.id,
        image: response.image,
        plot: response.plot,
        time: response.runtimeStr,
        title: response.title,
        rating: response.imDbRating,
        year: response.year,
      }),
    }),
  }),
});
export const { useGetMoviesQuery, useGetMovieQuery } = moviesApi;


