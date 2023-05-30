import { NavLink } from 'react-router-dom';

import logo from './logo.png';
import s from './index.module.css';
export function Header() {
  const isAuth = true; //временная реализация до полной реализации авторизации
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
