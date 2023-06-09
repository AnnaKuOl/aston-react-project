import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  CardList,
  ErrorMessage,
  SearchInput,
  Spinner,
  Title,
} from '../components';
import { useGetMoviesQuery } from '../redux';

import NotFoundPage from './NotFoundPage';
import s from './index.module.css';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { data: movies = [], isLoading, isError } = useGetMoviesQuery('');
  useEffect(() => {
    setError('');
  }, [search]);
  if (isLoading) return <Spinner />;
  if (isError) return <NotFoundPage text="This page does not exist. Go " />;
  const handleSearch = (e: React.MouseEvent | React.FormEvent) => {
    e.preventDefault();
    if (search.trim().length) {
      navigate('/search', { state: search });
    } else {
      setError('The input field should not be empty');
    }
  };

  return (
    <>
      <div className={s.searchGroup}>
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
      </div>
      <Title text="Most popular movies" />
      <CardList movies={movies} />;
    </>
  );
}
