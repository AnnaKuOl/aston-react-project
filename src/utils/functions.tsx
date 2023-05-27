import {
  FullMovieDataClient,
  FullMovieDataServer,
  ShortMovieDataClient,
  ShortMovieDataServer,
} from '../types/types';

export function transformFullDataFromServer(
  data: FullMovieDataServer
): FullMovieDataClient {
  return {
    actors: data.actorList.map((actor) => actor.name),
    companies: data.companies,
    countries: data.countries,
    directors: data.directors,
    genres: data.genres,
    id: data.id,
    image: data.image,
    plot: data.plot,
    time: data.runtimeStr,
    title: data.title,
    rating: data.imDbRating,
    year: data.year,
  };
}
export function transformShortDataFromServer(
  data: ShortMovieDataServer
): ShortMovieDataClient {
  return {
    id: data.id,
    image: data.image,
    title: data.title,
    rating: data.imDbRating,
    year: data.year,
  };
}
