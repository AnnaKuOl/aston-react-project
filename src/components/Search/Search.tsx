import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { useSearchMoviesQuery } from '../../redux';

import { useDebounce } from '../../hooks/useDebaunce';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export function Search() {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();

  const debaunceValue = useDebounce(search, 500);

  const {
    data: results,
    isLoading,
    isError,
  } = useSearchMoviesQuery(debaunceValue, {
    skip: debaunceValue.length < 3,
  });

  useEffect(() => {
    setSearch('');
  }, [location, results, dispatch]);

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      {isLoading && <p> Loading ...</p>}
      {isError && <p>{isError}</p>}
    </>
  );
}
