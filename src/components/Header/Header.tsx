import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { Button } from '../../components';
import { clearHistory } from '../../redux/historySlice';
import { clearFavoriteMovies } from '../../redux';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import { ThemeContext } from '../ThemeProvider/ThemeProvider';

import logo from './logo.png';
import s from './index.module.css';

export function Header() {
  const isAuth = localStorage.getItem('isAuth');
  const { toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const logout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem('isAuth');
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
        <div>
          <NavLink to="/">
            <img src={logo} alt="Логотип" />
          </NavLink>
          <Button onClick={changeTheme}> Смена темы </Button>
        </div>

        <nav className={s.navigation}>
          {isAuth ? (
            <>
              <NavLink to="/favorite" className={s.link}>
                Избранное
              </NavLink>
              <NavLink to="/history" className={s.link}>
                История
              </NavLink>
              <Button onClick={logout}>Выйти</Button>
            </>
          ) : (
            <>
              <NavLink to="/sigin" className={s.link}>
                Войти
              </NavLink>
              <NavLink to="/registration" className={s.link}>
                Регистрация
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
