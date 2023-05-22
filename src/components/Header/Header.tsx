import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import s from './index.module.css';
export function Header() {
  return (
    <header className={s.header}>
      <div className={`${s.wrapper} container`}>
        <NavLink to="/">
          <img src={logo} alt="Логотип" />
        </NavLink>
        <nav className={s.navigation}>
          <NavLink to="/sigin" className={s.link}>
            Войти
          </NavLink>
          <NavLink to="/registration" className={s.link}>
            Регистрация
          </NavLink>
          <NavLink to="/favorite" className={s.link}>
            Избранное
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
