import { Link, useLocation } from 'react-router-dom';

import { Movie, ShortMovieDataClient } from '../../types/types';

import { useGetMovieQuery } from '../../redux';

import { FavoriteButton } from '../FavoriteButton/FavoriteButton';

import s from './index.module.css';

export function Card({ image, title, id }: Movie) {
  const { data: movie, isLoading, isError } = useGetMovieQuery(id);

  return (
    <Link to={`movie/${id}`}>
      <div className={s.card}>
        <FavoriteButton id={id} movie={movie} />
        <img className={s.img} src={image} alt={title} />
        <h2>{title}</h2>
        {/* {year && <p>{year}</p>}
        {rating && <p>Rate: {rating}</p>} */}
      </div>
    </Link>
  );
}
