import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './components';
import { PrivateRoute } from './hoc/PrivateRoute';

const FavoritePage = lazy(() => import('./pages/FavoritePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const SinglePage = lazy(() => import('./pages/SinglePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const HistoryPage = lazy(() => import('./pages/HistoryPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));

// import { FavoritePage } from './pages/FavoritePage';
// import { CatalogPage } from './pages/CatalogPage';
// import { SinglePage } from './pages/SinglePage';
// import { LoginPage } from './pages/LoginPage';
// import { NotFoundPage } from './pages/NotFoundPage';
// import { RegistrationPage } from './pages/RegistrationPage';
// import { HistoryPage } from './pages/HistoryPage';
// import { SearchPage } from './pages/SearchPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CatalogPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="movie/:id" element={<SinglePage />} />
        <Route path="sigin" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route
          path="favorite"
          element={
            <PrivateRoute>
              <FavoritePage />
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
