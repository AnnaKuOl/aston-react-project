import { useNavigate } from 'react-router';

import { Button } from '../Button/Button';

export function ButtonBack() {
  const navigate = useNavigate();

  return <Button onClick={() => navigate(-1)}>Назад</Button>;
}
