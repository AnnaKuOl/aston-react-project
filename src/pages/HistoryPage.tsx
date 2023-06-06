import { Link } from 'react-router-dom';

import { useAppSelector } from '../hooks/useAppSelector';
import { Button, Title } from '../components';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { clearHistory } from '../redux/historySlice';
import { LSKey } from '../utils/functions';

import s from './index.module.css';

export default function HistoryPage() {
  const history = useAppSelector((state) => state.history.history);
  console.log('history: ', history);
  const dispatch = useAppDispatch();
  const deleteHistory = () => {
    dispatch(clearHistory());
    localStorage.removeItem(LSKey('hist'));
  };
  if (history.length === 0)
    return (
      <>
        <Title text="Your search history" />
        <h3 className={s.text}>Your search history is empty.</h3>
      </>
    );
  return (
    <>
      <div className={s.wrapper}>
        <Title text="Your search history" />
        <Button classTitle="outline" onClick={deleteHistory}>
          Clear history
        </Button>
      </div>
      <div className={s.history}>
        {history?.map((query) => (
          <Link className={s.link} to="/search" key={query} state={query}>
            {query}
          </Link>
        ))}
      </div>
    </>
  );
}
