import { CardList } from '../components';
import { useAppSelector } from '../hooks/useAppSelector';

export function FavoritePage() {
  const data = useAppSelector((state) => state.favoriteMovies);

  return (
    <>
      <h1>Избранное</h1>
      <CardList movies={data.favoriteMovies} />;
    </>
  );
}
