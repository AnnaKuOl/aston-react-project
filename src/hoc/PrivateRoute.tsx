import { Navigate, useLocation } from 'react-router-dom';
type Props = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: Props) {
  const location = useLocation();
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/sigin" state={{ from: location }} />;
  }

  return children;
}
