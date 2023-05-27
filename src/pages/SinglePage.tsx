import { useParams } from 'react-router-dom';

import { addFavoriteMovie, useGetMovieQuery } from '../redux';
import { Button } from '../components/Button/Button';
import { transformFullDataFromServer } from '../utils/functions';
import { useAppDispatch } from '../hooks/useAppDispatch';

export function SinglePage() {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { data } = useGetMovieQuery(id);

  const addFavoritesMovie = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addFavoriteMovie(data));
  };
  let movie;
  if (data) movie = transformFullDataFromServer(data);
  return (
    <div>
      <Button onClick={addFavoritesMovie}>Добавить в избранное</Button>
      <div>
        <img src={movie?.image} alt={movie?.title} />
      </div>
      <div>
        <h2>{movie?.title}</h2>
        <h3>{movie?.year}</h3>
        <p>{movie?.countries}</p>
        <p>{movie?.genres}</p>
        <p>{movie?.time}</p>
        <p>{movie?.companies}</p>
        <p>{movie?.directors}</p>
        <p>
          {movie?.actors?.map((item: string, index: number) => (
            <span key={index}>{item}</span>
          ))}
        </p>
        <p>{data?.plot}</p>
        <p>{data?.imDbRating}</p>
      </div>
    </div>
  );
}
