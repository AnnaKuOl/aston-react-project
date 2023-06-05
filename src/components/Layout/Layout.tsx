import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../../components';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Suspense fallback={<p>Loading ...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
