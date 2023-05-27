import { CardList } from '../components/CardList/CardList';
import { useGetMoviesQuery } from '../redux';
import { ShortMovieDataServer } from '../types/types';
import { transformShortDataFromServer } from '../utils/functions';

export function CatalogPage() {
  const { data = [], isLoading } = useGetMoviesQuery('');

  if (isLoading) return <h1>Loading...</h1>;

  const movies = data.items.map((movie: ShortMovieDataServer) =>
    transformShortDataFromServer(movie)
  );
  return <CardList movies={movies} />;
}
