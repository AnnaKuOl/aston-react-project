import { CardList } from '../components';
import { useAppSelector } from '../hooks/useAppSelector';

export function FavoritePage() {
  const { favoriteMovies } = useAppSelector((state) => state.favoriteMovies);

  if (favoriteMovies.length === 0)
    return <p className="text-center">No items.</p>;

  return (
    <>
      <h1>Избранное</h1>
      <CardList movies={favoriteMovies} />;
    </>
  );
}
