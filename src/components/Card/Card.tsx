import { Link } from 'react-router-dom';

import { ShortMovieDataClient } from '../../types/types';

import s from './index.module.css';

export function Card({ image, title, year, rating, id }: ShortMovieDataClient) {
  return (
    <div className={s.card}>
      <img className={s.img} src={image} alt={title} />
      <h2>{title}</h2>
      <p>{year}</p>
      <p>Rate: {rating}</p>

      <Link to={`movie/${id}`}>Подробнее</Link>
    </div>
  );
}
