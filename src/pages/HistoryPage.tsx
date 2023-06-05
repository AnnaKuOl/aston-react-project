import { Link } from 'react-router-dom';

import { useAppSelector } from '../hooks/useAppSelector';

export default function HistoryPage() {
  const history = useAppSelector((state) => state.history.history);

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
