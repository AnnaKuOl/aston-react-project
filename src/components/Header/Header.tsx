import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { Button } from '../../components';
import { clearHistory } from '../../redux/historySlice';
import { clearFavoriteMovies } from '../../redux';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { User } from '../../types/types';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { getDataFromLS, removeDataFromLS } from '../../utils/functions';

import logo from './logo.png';
import s from './index.module.css';

export function Header() {
  const isAuth = getDataFromLS('isAuth', '""');
  const users: User[] = getDataFromLS('users', '[]');
  const currentUser: User | undefined = users?.find(
    (user) => user.email === isAuth
  );
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = (e: React.MouseEvent) => {
    e.preventDefault();
    removeDataFromLS('isAuth');
    dispatch(clearHistory());
    dispatch(clearFavoriteMovies());
    navigate('/');
  };

  const changeTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleTheme();
  };

  return (
    <header className={s.header}>
      <div className={`${s.wrapper} container`}>
        <div className={s.logo}>
          <NavLink to="/">
            <img src={logo} alt="Логотип" />
          </NavLink>
          <Button onClick={changeTheme} classTitle={theme} title={theme} />
        </div>

        <nav className={s.navigation}>
          {isAuth ? (
            <>
              <p>Hello, {currentUser?.login}</p>
              <NavLink to="/favorite" className={s.link}>
                Favourites
              </NavLink>
              <NavLink to="/history" className={s.link}>
                History
              </NavLink>
              <Button onClick={logout} classTitle="logout" title="Logout">
                Logout
              </Button>
            </>
          ) : (
            <>
              <NavLink to="/signin" className={s.link}>
                signin
              </NavLink>
              <NavLink to="/registration" className={s.link}>
                Registration
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
