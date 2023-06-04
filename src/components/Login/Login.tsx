import { useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';

import {
  EMAIL_REGEXP,
  LS_USERS_KEY,
  PASSWORD_REGEXP,
  VALIDATE_CONFIG,
} from '../../utils/const';
import { Button, Form } from '../../components';
import { Errors, User } from '../../types/types';
import { LSKey } from '../../utils/functions';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addHistory } from '../../redux/historySlice';
import { FavoriteMovies, addFavoriteMovie } from '../../redux';

export const Login = () => {
  const [errorLogin, setErrorLogin] = useState<Errors>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ mode: 'onBlur' });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const sendRegisterLS: SubmitHandler<User> = (data) => {
    const usersLS = localStorage.getItem(LS_USERS_KEY);

    if (usersLS) {
      const users = JSON.parse(usersLS || '');
      const user = users?.find((user: User) => user.email === data.email);

      if (user) {
        if (user.password === data.password) {
          localStorage.setItem('isAuth', JSON.stringify(user.email));
          const history: string[] = JSON.parse(
            localStorage.getItem(LSKey('hist')) ?? '[]'
          );
          const favoriteMovies: FavoriteMovies[] = JSON.parse(
            localStorage.getItem(LSKey('fav')) ?? '[]'
          );
          favoriteMovies.forEach((movie) => {
            dispatch(addFavoriteMovie(movie));
          });
          history.forEach((query) => {
            dispatch(addHistory(query));
          });
          navigate('/');
        } else {
          setErrorLogin({ password: 'Пароль неверен' });
        }
      } else {
        setErrorLogin({ email: 'Пользователь не найден' });
      }
    } else {
      setErrorLogin({ email: 'Пользователь не найден' });
    }
  };
  const handleClickRegisterButton = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/registration');
  };

  const emailRegister = register('email', {
    required: {
      value: true,
      message: VALIDATE_CONFIG.requiredMessage,
    },
    pattern: {
      value: EMAIL_REGEXP,
      message: VALIDATE_CONFIG.emailMessage,
    },
  });
  const passwordRegister = register('password', {
    required: {
      value: true,
      message: VALIDATE_CONFIG.requiredMessage,
    },
    pattern: {
      value: PASSWORD_REGEXP,
      message: VALIDATE_CONFIG.passwordMessage,
    },
  });

  return (
    <Form title="Войти" handleFormSubmit={handleSubmit(sendRegisterLS)}>
      <input {...emailRegister} id="email" type="text" placeholder="email" />
      {errors?.email && (
        <p className="errorMessage">{errors?.email?.message}</p>
      )}
      {errorLogin?.email && <p className="errorMessage">{errorLogin?.email}</p>}

      <input {...passwordRegister} type="password" placeholder="Пароль" />

      {errors?.password && (
        <p className="errorMessage">{errors?.password?.message}</p>
      )}
      {errorLogin?.password && (
        <p className="errorMessage">{errorLogin?.password}</p>
      )}

      <Button onClick={handleSubmit(sendRegisterLS)}>Войти</Button>
      <Button onClick={handleClickRegisterButton}>Зарегистрироваться</Button>
    </Form>
  );
};
