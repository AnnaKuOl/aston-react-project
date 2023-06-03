import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { useDebounce } from '../hooks/useDebaunce';
import { SearchInput, SearchResults } from '../components';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addHistory } from '../redux/historySlice';

export function SearchPage() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState(location.state);
  const debaunceValue = useDebounce(search, 500);

  useEffect(() => {
    dispatch(addHistory(debaunceValue));
  }, [dispatch, debaunceValue]);

  return (
    <>
      <SearchInput
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <SearchResults searchText={debaunceValue} />
    </>
  );
}
