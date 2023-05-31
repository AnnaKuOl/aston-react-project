import { NavLink, useNavigate } from 'react-router-dom';

import { Button } from '../../components';

import logo from './logo.png';
import s from './index.module.css';

export function Header() {
  const isAuth = localStorage.getItem('isAuth');
  const navigate = useNavigate();
  const logout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem('isAuth');
    navigate('/');
  };
  return (
    <header className={s.header}>
      <div className={`${s.wrapper} container`}>
        <NavLink to="/">
          <img src={logo} alt="Логотип" />
        </NavLink>
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
