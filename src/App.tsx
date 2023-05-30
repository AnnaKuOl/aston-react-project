import { Routes, Route } from 'react-router-dom';

import { Layout } from './components';
import { FavoritePage } from './pages/FavoritePage';
import { CatalogPage } from './pages/CatalogPage';
import { SinglePage } from './pages/SinglePage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { PrivateRoute } from './hoc/PrivateRoute';
import { HistoryPage } from './pages/HistoryPage';
import { SearchPage } from './pages/SearchPage';

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
