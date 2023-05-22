import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { CatalogPage } from './pages/CatalogPage';
import { SinglePage } from './pages/SinglePage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { FavoritePage } from './pages/FavoritePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CatalogPage />} />
          <Route path="film/:id" element={<SinglePage />} />
          <Route path="sigin" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
