import { Link } from 'react-router-dom';

export const ErrorFallback = () => {
  return (
    <div>
      <p>Something went wrong.</p>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};
