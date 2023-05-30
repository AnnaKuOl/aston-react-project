import { CardList } from '../components';
import { Search } from '../components';
import { useGetMoviesQuery } from '../redux';

export function CatalogPage() {
  const { data: movies = [], isLoading, isError } = useGetMoviesQuery('');

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;

  return (
    <>
      <Search />
      <CardList movies={movies} />;
    </>
  );
}
