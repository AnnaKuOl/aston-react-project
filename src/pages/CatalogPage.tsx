import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, CardList, SearchInput } from '../components';
import { useGetMoviesQuery } from '../redux';

export default function CatalogPage() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { data: movies = [], isLoading, isError } = useGetMoviesQuery('');
  useEffect(() => {
    setError('');
  }, [search]);
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;
  const handleSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    if (search.trim().length) {
      navigate('/search', { state: search });
    } else {
      setError('Поле ввода не должно быть пустым');
    }
  };

  return (
    <>
      <SearchInput
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <Button onClick={handleSearch}>Поиск</Button>
      {error && <p>{error}</p>}
      <CardList movies={movies} />;
    </>
  );
}
