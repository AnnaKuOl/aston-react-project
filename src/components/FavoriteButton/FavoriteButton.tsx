import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  FavoriteMovies,
  addFavoriteMovie,
  removeFavoriteMovie,
} from '../../redux';
import { Button } from '../../components';
import { FullMovieDataClient, Movie } from '../../types/types';

type Props = {
  id: string;
  movie?: FavoriteMovies | FullMovieDataClient;
};

export function FavoriteButton({ id, movie }: Props) {
  const favoriteMovies = useAppSelector(
    (state) => state.favoriteMovies.favoriteMovies
  );
  const isFav = favoriteMovies.find((movie) => movie.id === id)?.isFavorite;
  const dispatch = useAppDispatch();

  const addFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addFavoriteMovie(movie));
  };
  const removeFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeFavoriteMovie(movie));
  };
  return (
    <>
      {!isFav && <Button onClick={addFavorite}>Добавить в избранное</Button>}
      {isFav && <Button onClick={removeFavorite}>Удалить из избранного</Button>}
    </>
  );
}
