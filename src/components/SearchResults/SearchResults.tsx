import PropTypes from 'prop-types';

import { useSearchMoviesQuery } from '../../redux';
import { Spinner, ErrorMessage } from '../../components';
import { CardList } from '../CardList/CardList';

type Props = {
  searchText: string;
};
export function SearchResults({ searchText }: Props) {
  const { data, isLoading, isError } = useSearchMoviesQuery(searchText);
  const movies = data ?? [];
  if (isError) {
    return <ErrorMessage>Something went wrong. Try again later</ErrorMessage>;
  }
  if (isLoading) {
    return <Spinner />;
  }
  if (movies.length >= 1) return <CardList movies={movies} />;
  return null;
}

SearchResults.propTypes = {
  searchText: PropTypes.string,
};
