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
      <form onSubmit={handleSearch}>
        <SearchInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
      </form>
      <Button onClick={handleSearch}>Поиск</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <CardList movies={movies} />;
    </>
  );
}
