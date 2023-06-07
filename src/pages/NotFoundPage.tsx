import { Link } from 'react-router-dom';

import s from './index.module.css';

export default function NotFoundPage() {
  return (
    <div className={s.error}>
      This page doesn't exist. Go{' '}
      <Link className={s.link} to="/">
        home
      </Link>
    </div>
  );
}
