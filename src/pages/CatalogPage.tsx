import { CardList } from '../components/CardList/CardList';
import { useGetMoviesQuery } from '../redux';

export function CatalogPage() {
  const { data: movies = [], isLoading } = useGetMoviesQuery('');

  if (isLoading) return <h1>Loading...</h1>;

  return <CardList movies={movies} />;
}
