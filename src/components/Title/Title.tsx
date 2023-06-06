import cn from 'classnames';

import { useTheme } from '../../hooks/useTheme';

import s from './index.module.css';

type Props = {
  text: string | undefined;
};

export function Title({ text }: Props) {
  return <h2 className={cn(s.title, s[useTheme('title')])}>{text}</h2>;
}
