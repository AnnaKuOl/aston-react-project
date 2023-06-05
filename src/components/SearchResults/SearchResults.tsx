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
  if (movies.length < 1)
    return <div>There are no results found. Please try another search.</div>;

  return <CardList movies={movies} />;
}
SearchResults.propTypes = {
  searchText: PropTypes.string,
};
