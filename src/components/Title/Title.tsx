import s from './index.module.css';

type Props = {
  text: string | undefined;
};

export function Title({ text }: Props) {
  return <h2 className={s.title}>{text}</h2>;
}
