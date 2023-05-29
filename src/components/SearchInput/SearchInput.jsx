import { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { useSearchMoviesQuery } from '../../redux';

import { useDebounce } from '../../hooks/useDebaunce';

export function SearchInput() {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [dropDown, setDropDown] = useState(false);
  const debaunceValue = useDebounce(search, 500);

  const {
    data: results,
    isLoading,
    isError,
  } = useSearchMoviesQuery(debaunceValue);
  useEffect(() => {
    setDropDown(debaunceValue.length > 3 && results?.length > 0);
  }, [debaunceValue, results]);

  useEffect(() => {
    setDropDown(false);
    setSearch('');
  }, [location]);
  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      {isLoading && <p> Loading ...</p>}
      {isError && <p>{isError}</p>}
      {/* Решить вопрос отображения не найденного */}
      {results?.length === 0 && <p>"Sorry, but we didn't find anything."</p>}
      {dropDown && (
        <ul>
          {results?.slice(0, 5).map((item) => (
            <li key={item.id} onClick={() => handleClick(item.id)}>
              <Link to={`movie/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
