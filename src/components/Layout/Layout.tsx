import cn from 'classnames';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ButtonBack, Footer, Header, Spinner } from '../../components';

import s from './index.module.css';

import '../../index.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={cn(s.main, 'container content')}>
        <ButtonBack />
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
