import { useContext } from 'react';

import { ThemeContext } from '../ThemeProvider/ThemeProvider';

import s from './index.module.css';

interface Props {
  onClick: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  classTitle?: string;
  title?: string;
}
export function Button({ children, onClick, classTitle, title }: Props) {
  console.log('classTitle: ', classTitle);
  const { theme } = useContext(ThemeContext);

  const style = classTitle ? `${s.btn} ${s[classTitle]}` : `${s.btn}`;

  return (
    <button className={style} onClick={onClick} title={title}>
      {children}
    </button>
  );
}
