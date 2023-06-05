import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ButtonBack, Header, Spinner } from '../../components';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <ButtonBack />
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
