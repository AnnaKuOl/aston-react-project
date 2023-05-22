import { Link } from 'react-router-dom';
import s from './index.module.css';

export function Card() {
  const film = {
    poster:
      'https://m.media-amazon.com/images/M/MV5BYzI5MjQ2NzEtN2JmOC00MjE2LWI2NjItYTNjNTJjMjBkOWZkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    title: 'Tiger King',
    type: 'series',
    year: '2020–2021',
    id: 'tt11823076',
  };

  return (
    <div className={s.card}>
      <img className={s.img} src={film.poster} alt={film.title} />
      <h2>{film.title}</h2>
      <p>{film.year}</p>
      <p>{film.type}</p>

      <Link to={`film/${film.id}`}>Подробнее</Link>
      <button>Добавить в избранное</button>
    </div>
  );
}
