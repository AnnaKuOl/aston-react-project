import { Link } from 'react-router-dom';

import { useAppSelector } from '../hooks/useAppSelector';

export default function HistoryPage() {
  const history = useAppSelector((state) => state.history.history);
  if (history.length < 0)
    return (
      <h2 style={{ textAlign: 'center' }}>Search history is still empty</h2>
    );
  return (
    <div>
      {history?.map((query) => (
        <Link to="/search" key={query} state={query}>
          {query}
        </Link>
      ))}
    </div>
  );
}
