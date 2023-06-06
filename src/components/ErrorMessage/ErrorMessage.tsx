import s from './index.module.css';

type Props = {
  children: React.ReactNode;
};
export function ErrorMessage({ children }: Props) {
  return <span className={s.text}> {children} </span>;
}
