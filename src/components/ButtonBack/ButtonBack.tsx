import { useNavigate } from 'react-router';

import { Button } from '../Button/Button';

export function ButtonBack() {
  const navigate = useNavigate();

  return (
    <Button classTitle="outline" onClick={() => navigate(-1)}>
      Back
    </Button>
  );
}
