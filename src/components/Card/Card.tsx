import { Link } from 'react-router-dom';

import { Movie } from '../../types/types';

import s from './index.module.css';

export function Card({ image, title, id }: Movie) {
  return (
    <Link className={s.link} to={`/movie/${id}`}>
      <div className={s.card}>
        <div className={s.wrapper}>
          <img className={s.img} src={image} alt={title} />
        </div>
        <h2 className={s.title}>{title}</h2>
      </div>
    </Link>
  );
}
