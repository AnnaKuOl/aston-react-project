# Movie Search

Учебный проект выполнен в рамках React-интенсива компании Aston.

Реализованы следующие требования к функциональности:

## 1 уровень

### React

- Функциональные компоненты c хуками в приоритете над классовыми.
- Есть четкое разделение на умные и глупые компоненты. [Button](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/components/Button/Button.tsx) / [HomePage](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/pages/HomePage.tsx) , [SearchInput](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/components/SearchInput/SearchInput.tsx) / [SearchPage](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/pages/SearchPage.tsx)
- Есть рендеринг списков: [CardList](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/components/CardList/CardList.tsx).
- Реализована хотя бы одна форма: [Registration](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/components/Registration/Registration.tsx), [Signin](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/components/Signin/Signin.tsx).
- Есть применение Контекст API: [ThemeProvider](https://github.com/AnnaKuOl/aston-react-project/tree/main/src/components/ThemeProvider).
- Есть применение предохранителя: [App](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/components/App/App.tsx).
- Есть хотя бы один кастомный хук: [useDebounce](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/hooks/useDebaunce.tsx), [useTheme](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/hooks/useTheme.ts).
- Хотя бы несколько компонентов используют PropTypes: [CardList](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/components/CardList/CardList.tsx), [SearchResults](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/components/SearchResults/SearchResults.tsx).
- Поиск не должен триггерить много запросов к серверу: [useDebounce](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/hooks/useDebaunce.tsx), использован в компоненте [SearchPage](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/pages/SearchPage.tsx).
- Есть применение lazy + Suspense: [App](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/components/App/App.tsx)+ [Layout](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/components/Layout/Layout.tsx).

### Redux

- Используем Modern Redux with Redux Toolkit: [store](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/redux/store.ts).
- Используем слайсы: [usersSlice](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/redux/usersSlice.ts), [favoriteMoviesSlice](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/redux/favoriteMoviesSlice.ts), [historySlice](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/redux/historySlice.ts).
- Есть хотя бы одна кастомная мидлвара: [localStorageMiddleware](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/redux/middleware/localStorageMiddleware.tsx).
- Используется RTK Query: [moviesApi](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/redux/moviesApi.ts).
- Используется Transforming Responses: [moviesApi](https://github.com/AnnaKuOl/aston-react-project/blob/main/src/redux/moviesApi.ts).
=======
## 2 уровень

- Использован TypeScript.
