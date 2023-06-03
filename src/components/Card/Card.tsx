import { Link } from 'react-router-dom';

import { Movie } from '../../types/types';

import s from './index.module.css';

export function Card({ image, title, id }: Movie) {
  return (
    <Link to={`/movie/${id}`}>
      <div className={s.card}>
        <img className={s.img} src={image} alt={title} />
        <h2>{title}</h2>
        {/* {year && <p>{year}</p>}
        {rating && <p>Rate: {rating}</p>} */}
      </div>
    </Link>
  );
}
