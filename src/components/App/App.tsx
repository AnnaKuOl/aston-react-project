import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { ErrorBoundary, ErrorFallback, Layout } from '../../components';
import { PrivateRoute } from '../../hoc/PrivateRoute';

const FavoritePage = lazy(() => import('../../pages/FavoritePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage'));
const SinglePage = lazy(() => import('../../pages/SinglePage/SinglePage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'));
const HistoryPage = lazy(() => import('../../pages/HistoryPage'));
const SearchPage = lazy(() => import('../../pages/SearchPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CatalogPage />} />
        <Route
          path="search"
          element={
            <ErrorBoundary fallback={<ErrorFallback />}>
              <SearchPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="movie/:id"
          element={
            <ErrorBoundary fallback={<ErrorFallback />}>
              <SinglePage />
            </ErrorBoundary>
          }
        />
        <Route path="sigin" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route
          path="favorite"
          element={
            <PrivateRoute>
              <ErrorBoundary fallback={<ErrorFallback />}>
                <FavoritePage />
              </ErrorBoundary>
            </PrivateRoute>
          }
        />
        <Route
          path="history"
          element={
            <PrivateRoute>
              <HistoryPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
