import { Outlet } from 'react-router-dom';

import { Header } from '../../components';

export const Layout = () => {
  return (
    <>
      <Header />

      <main className="container">
        <Outlet />
      </main>
    </>
  );
};
