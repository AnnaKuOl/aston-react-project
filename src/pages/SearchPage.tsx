// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { Button, Search, SearchInput } from '../components';

// export function SearchPage() {
//   const [searchText, setSearchText] = useState('');
//   const navigate = useNavigate();
//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchText(e.target.value);
//   };
//   const search = () => {
//     navigate('/search');
//   };
//   return (
//     <>
//       <SearchInput
//         type="text"
//         placeholder="Enter your search request here"
//         value={searchText}
//         onChange={onChange}
//       />
//       <Button onClick={search}>Поиск</Button>
//       <Search searchText={searchText} />
//     </>
//   );
// }

import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { useDebounce } from '../hooks/useDebaunce';
import { Search, SearchInput } from '../components';
import { useSearchMoviesQuery } from '../redux';

export function SearchPage() {
  const location = useLocation();
  console.log('location: ', location);
  const [search, setSearch] = useState('');

  const debaunceValue = useDebounce(search, 1500);

  //   const {
  //     data: results,
  //     isLoading,
  //     isError,
  //   } = useSearchMoviesQuery(debaunceValue, {
  //     skip: debaunceValue.length < 3,
  //   });

  //   useEffect(() => {
  //     setSearch('');
  //   }, [location]);

  return (
    <>
      <SearchInput
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <Search searchText={debaunceValue} />
    </>
  );
}
