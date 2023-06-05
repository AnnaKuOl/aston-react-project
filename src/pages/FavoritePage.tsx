import { Button, CardList } from '../components';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { clearFavoriteMovies } from '../redux';

export default function FavoritePage() {
  const { favoriteMovies } = useAppSelector((state) => state.favoriteMovies);
  const dispatch = useAppDispatch();
  const deleteFavorites = () => {
    dispatch(clearFavoriteMovies());
  };

  if (favoriteMovies.length === 0)
    return <p className="text-center">No items.</p>;

  return (
    <>
      <h1>Избранное</h1>
      <Button onClick={deleteFavorites}>Очистить Избранное</Button>
      <CardList movies={favoriteMovies} />;
    </>
  );
}
