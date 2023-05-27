import cn from 'classnames';

import { Card } from '../../components';

import { ShortMovieDataClient } from '../../types/types';

import { FavoriteMovies } from '../../redux';

import s from './index.module.css';

interface Props {
  movies: ShortMovieDataClient[] | FavoriteMovies[];
}

export function CardList({ movies }: Props) {
  return (
    <div className={cn(s.cards, 'container')}>
      {movies?.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </div>
  );
}
