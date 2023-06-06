import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { useDebounce } from '../hooks/useDebaunce';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { SearchInput, SearchResults, Title } from '../components';
import { addHistory } from '../redux/historySlice';

import s from './index.module.css';

export default function SearchPage() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState(location.state);
  const debaunceValue = useDebounce(search, 500);
  useEffect(() => {
    dispatch(addHistory(debaunceValue));
  }, [dispatch, debaunceValue]);

  return (
    <>
      <div className={s.container}>
        <SearchInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
      </div>
      <Title text="Search results" />
      <SearchResults searchText={debaunceValue} />
    </>
  );
}
