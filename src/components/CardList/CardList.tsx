import cn from 'classnames';

import PropTypes from 'prop-types';

import { Card } from '../../components';
import { Movie } from '../../types/types';

import s from './index.module.css';

interface Props {
  movies: Movie[];
}

export function CardList({ movies }: Props) {
  return (
    <div className={cn(s.cards, 'container')}>
      {movies.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </div>
  );
}
CardList.propTypes = {
  movies: PropTypes.array,
};
