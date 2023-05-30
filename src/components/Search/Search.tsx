import { useSearchMoviesQuery } from '../../redux';

import { CardList } from '../CardList/CardList';

type Props = {
  searchText: string;
};
export function Search({ searchText }: Props) {
  const { data, isLoading, isError } = useSearchMoviesQuery(searchText);
  const movies = data ?? [];
  if (isError) {
    return <h2>Ошибка</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (movies.length >= 1) return <CardList movies={movies} />;
  return null;
}
