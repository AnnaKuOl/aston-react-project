import cn from 'classnames';

import { useTheme } from '../../hooks/useTheme';

import s from './index.module.css';

type Props = {
  type: string;
  value: string;
  placeholder?: string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const SearchInput = ({ onChange, ...inputProps }: Props) => {
  return (
    <input
      className={cn(s.input, s[useTheme('input')])}
      onChange={onChange}
      autoFocus
      {...inputProps}
    />
  );
};
