import { useSelector } from 'react-redux';

export function useAuth(id) {
  const { users } = useSelector((state) => state.users);
  const user = users.find((user) => (user.id = id));
  return {
    isAuth: !!user.login,
    login: user.login,
    emeil: user.email,
    id: user.id,
    password: user.password,
    favoriteMovies: user.favoriteMovies,
    history: user.history,
  };
}
