import { Link } from 'react-router-dom';

import s from './index.module.css';
interface ClientData {
  crew: string;
  id: string;
  rating: string;
  image: string;
  title: string;
  year: string;
}

export function Card({ image, title, year, crew, rating, id }: ClientData) {
  return (
    <div className={s.card}>
      <img className={s.img} src={image} alt={title} />
      <h2>{title}</h2>
      <p>{year}</p>
      <p>Rate: {rating}</p>
      <p>Rate: {crew}</p>

      <Link to={`movie/${id}`}>Подробнее</Link>
      <button>Добавить в избранное</button>
    </div>
  );
}
