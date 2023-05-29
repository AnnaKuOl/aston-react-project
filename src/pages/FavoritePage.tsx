import { CardList } from '../components';
import { useAppSelector } from '../hooks/useAppSelector';

export function FavoritePage() {
  const data = useAppSelector((state) => state.movies);

  return (
    <>
      <h1>Избранное</h1>
      <CardList movies={data.favoriteMovies} />;
    </>
  );
}
