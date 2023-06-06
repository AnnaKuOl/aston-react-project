import { Navigate, useLocation } from 'react-router-dom';
type Props = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: Props) {
  const location = useLocation();
  const isAuth = localStorage.getItem('isAuth');

  if (!isAuth) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
}
