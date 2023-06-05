import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { addFavoriteMovie, removeFavoriteMovie } from '../../redux';
import { Button } from '../../components';
import { FavoriteMovies, FullMovieDataClient } from '../../types/types';

import s from './index.module.css';

type Props = {
  id: string;
  movie?: FavoriteMovies | FullMovieDataClient;
};

export function FavoriteButton({ id, movie }: Props) {
  const isAuth = localStorage.getItem('isAuth') ?? '';
  const dispatch = useAppDispatch();
  const favoriteMovies = useAppSelector(
    (state) => state.favoriteMovies.favoriteMovies
  );
  const isFav = favoriteMovies.find((movie) => movie.id === id)?.isFavorite;

  const addFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addFavoriteMovie(movie));
  };
  const removeFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeFavoriteMovie(movie));
  };
  if (!isAuth) return null;
  return (
    <div className={s.btns}>
      {!isFav && (
        <Button
          classTitle="like"
          onClick={addFavorite}
          title="Add to favorites"
        ></Button>
      )}
      {isFav && (
        <Button
          classTitle="dislike"
          onClick={removeFavorite}
          title="Delete fron favorites"
        ></Button>
      )}
    </div>
  );
}
