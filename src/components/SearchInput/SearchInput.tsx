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
    <input className={s.input} onChange={onChange} autoFocus {...inputProps} />
  );
};
