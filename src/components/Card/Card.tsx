import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Movie } from '../../types/types';
import { useTheme } from '../../hooks/useTheme';

import s from './index.module.css';

export function Card({ image, title, id }: Movie) {
  return (
    <Link className={s.link} to={`/movie/${id}`}>
      <div className={s.card}>
        <div className={s.wrapper}>
          <img className={s.img} src={image} alt={title} />
        </div>
        <h2 className={cn(s.title, s[useTheme('title')])}>{title}</h2>
      </div>
    </Link>
  );
}
