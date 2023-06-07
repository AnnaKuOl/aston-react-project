import { Title } from '../Title/Title';

import s from './index.module.css';

type Props = {
  title: string;
  children: React.ReactNode;
  handleFormSubmit: () => void;
};
export const Form = ({ title, children, handleFormSubmit }: Props) => {
  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <Title text={title} />
      {children}
    </form>
  );
};
