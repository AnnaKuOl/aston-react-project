import cn from 'classnames';

import { useGetMoviesQuery } from '../../redux';

import { Card } from '../../components';

import s from './index.module.css';

export function CardList() {
  const { data = [], isLoading } = useGetMoviesQuery('');

  if (isLoading) return <h1>Loading...</h1>;

  interface ServerData {
    crew: string;
    fullTitle: string;
    id: string;
    imDbRating: string;
    imDbRatingCount: string;
    image: string;
    rank: string;
    rankUpDown: string;
    title: string;
    year: string;
  }
  interface ClientData {
    crew: string;
    id: string;
    rating: string;
    image: string;
    title: string;
    year: string;
  }
  function transformDataFromServer(data: ServerData[]): ClientData[] {
    return data.map((item) => {
      return {
        id: item.id,
        rating: item.imDbRating,
        title: item.title,
        image: item.image,
        year: item.year,
        crew: item.crew,
      };
    });
  }

  const movies = transformDataFromServer(data.items);

  return (
    <div className={cn(s.cards, 'container')}>
      {movies.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </div>
  );
}
