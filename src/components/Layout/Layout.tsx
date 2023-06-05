import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ButtonBack, Header } from '../../components';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <ButtonBack />
        <Suspense fallback={<p>Loading ...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
