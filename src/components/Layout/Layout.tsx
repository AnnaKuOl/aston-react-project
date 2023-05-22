import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>2023</footer>
    </>
  );
};
