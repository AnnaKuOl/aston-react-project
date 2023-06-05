import { Link } from 'react-router-dom';

import { useAppSelector } from '../hooks/useAppSelector';
import { Button } from '../components';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { clearHistory } from '../redux/historySlice';

export default function HistoryPage() {
  const history = useAppSelector((state) => state.history.history);
  const dispatch = useAppDispatch();
  const deleteHistory = () => {
    dispatch(clearHistory());
  };
  if (history.length < 0)
    return (
      <h2 style={{ textAlign: 'center' }}>Search history is still empty</h2>
    );
  return (
    <>
      <Button onClick={deleteHistory}>Очистить историю</Button>
      <div>
        {history?.map((query) => (
          <Link to="/search" key={query} state={query}>
            {query}
          </Link>
        ))}
      </div>
    </>
  );
}
