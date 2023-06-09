import { useState } from 'react';
import cn from 'classnames';

import { useForm, SubmitHandler } from 'react-hook-form';

import { useLocation, useNavigate } from 'react-router-dom';

import {
  EMAIL_REGEXP,
  LS_USERS_KEY,
  PASSWORD_REGEXP,
  VALIDATE_CONFIG,
} from '../../utils/const';
import { Button, ErrorMessage, Form } from '..';
import { Errors, FavoriteMovies, User } from '../../types/types';
import { LSKey } from '../../utils/functions';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useTheme } from '../../hooks/useTheme';
import { addAllHistory } from '../../redux/historySlice';
import { addAllFavoriteMovies } from '../../redux';

import s from './index.module.css';

export const Signin = () => {
  const [errorLogin, setErrorLogin] = useState<Errors>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ mode: 'onBlur' });
  const navigate = useNavigate();
  const location = useLocation();
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
          dispatch(addAllFavoriteMovies(favoriteMovies));
          dispatch(addAllHistory(history));
          if (location.state) {
            navigate(location.state, { replace: true });
          } else {
            navigate('/', { replace: true });
          }
        } else {
          setErrorLogin({ password: 'Invalid password' });
        }
      } else {
        setErrorLogin({ email: 'User with this login does not exist' });
      }
    } else {
      setErrorLogin({ email: 'User with this login does not exist' });
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
    <Form title="Login" handleFormSubmit={handleSubmit(sendRegisterLS)}>
      <input
        className={cn(s.input, s[useTheme('input')])}
        {...emailRegister}
        id="email"
        type="email"
        placeholder="email"
      />
      {errors?.email && <ErrorMessage>{errors?.email?.message}</ErrorMessage>}
      {errorLogin?.email && <ErrorMessage>{errorLogin?.email}</ErrorMessage>}

      <input
        className={cn(s.input, s[useTheme('input')])}
        {...passwordRegister}
        type="password"
        placeholder="password"
      />

      {errors?.password && (
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
      )}
      {errorLogin?.password && (
        <ErrorMessage>{errorLogin?.password}</ErrorMessage>
      )}
      <div className={s.btnGroup}>
        <Button classTitle="login" onClick={handleSubmit(sendRegisterLS)}>
          Signin
        </Button>
        <Button classTitle="login" onClick={handleClickRegisterButton}>
          register
        </Button>
      </div>
    </Form>
  );
};
