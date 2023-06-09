import { Navigate, useLocation } from 'react-router-dom';

import { getDataFromLS } from '../../utils/functions';
type Props = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: Props) {
  const location = useLocation();
  const isAuth = getDataFromLS('isAuth', '""');

  if (!isAuth) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
}
