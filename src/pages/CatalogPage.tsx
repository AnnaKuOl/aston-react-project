import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  CardList,
  ErrorMessage,
  SearchInput,
  Spinner,
} from '../components';
import { useGetMoviesQuery } from '../redux';

import NotFoundPage from './NotFoundPage';
import s from './index.module.css';

export default function CatalogPage() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { data: movies = [], isLoading, isError } = useGetMoviesQuery('');
  useEffect(() => {
    setError('');
  }, [search]);
  if (isLoading) return <Spinner />;
  if (isError) return <NotFoundPage />;
  const handleSearch = (e: React.MouseEvent | React.FormEvent) => {
    e.preventDefault();
    if (search.trim().length) {
      navigate('/search', { state: search });
    } else {
      setError('Поле ввода не должно быть пустым');
    }
  };

  return (
    <>
      <form className={s.searchForm} onSubmit={handleSearch}>
        <SearchInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
        <Button
          onClick={handleSearch}
          classTitle="search"
          title="Search"
        ></Button>
      </form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <CardList movies={movies} />;
    </>
  );
}
