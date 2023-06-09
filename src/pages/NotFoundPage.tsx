import { Link } from 'react-router-dom';

import s from './index.module.css';

type Props = {
  text: string;
  pathForTransition?: string;
};

export default function NotFoundPage({ text, pathForTransition = '' }: Props) {
  return (
    <div className={s.error}>
      {text}
      <Link className={s.link} to={`/${pathForTransition}`}>
        {pathForTransition ? <span>{pathForTransition}</span> : 'home'}
      </Link>
    </div>
  );
}
