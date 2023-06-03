import { useEffect } from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useSearchMoviesQuery } from '../../redux';
import { addHistory } from '../../redux/historySlice';

import { CardList } from '../CardList/CardList';

type Props = {
  searchText: string;
};
export function SearchResults({ searchText }: Props) {
  const { data, isLoading, isError } = useSearchMoviesQuery(searchText);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addHistory(searchText));
  }, [dispatch, searchText]);
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
