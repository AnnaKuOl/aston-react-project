import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, CardList, SearchInput } from '../components';
import { useGetMoviesQuery } from '../redux';

export function CatalogPage() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { data: movies = [], isLoading, isError } = useGetMoviesQuery('');

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;

  return (
    <>
      <SearchInput
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <Button onClick={() => navigate('/search', { state: search })}>
        Поиск
      </Button>
      <CardList movies={movies} />;
    </>
  );
}
