import { Button, CardList, Title } from '../components';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { clearFavoriteMovies } from '../redux';
import { LSKey } from '../utils/functions';

import s from './index.module.css';

export default function FavoritePage() {
  const { favoriteMovies } = useAppSelector((state) => state.favoriteMovies);
  const dispatch = useAppDispatch();
  const deleteFavorites = () => {
    dispatch(clearFavoriteMovies());
    localStorage.removeItem(LSKey('fav'));
  };

  if (favoriteMovies.length === 0)
    return (
      <>
        <Title text="Your search history" />
        <h3 className={s.text}>No items.</h3>;
      </>
    );

  return (
    <>
      <div className={s.wrapper}>
        <Title text="Your favourtes movies" />
        <Button classTitle="outline" onClick={deleteFavorites}>
          Clear favourites
        </Button>
      </div>
      <CardList movies={favoriteMovies} />;
    </>
  );
}
