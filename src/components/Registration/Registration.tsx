import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import cn from 'classnames';

import { useNavigate } from 'react-router-dom';

import {
  EMAIL_REGEXP,
  LOGIN_REGEXP,
  PASSWORD_REGEXP,
  VALIDATE_CONFIG,
} from '../../utils/const';
import { Button, ErrorMessage, Form } from '..';
import { User } from '../../types/types';
import { useTheme } from '../../hooks/useTheme';
import { getDataFromLS, setDataToLS } from '../../utils/functions';

import s from './index.module.css';

export const Registration = () => {
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ mode: 'onBlur' });
  const navigate = useNavigate();

  const sendRegisterLS: SubmitHandler<User> = (data) => {
    const users: User[] = getDataFromLS('users', '""');
    if (users) {
      if (users.some((user) => user.email === data.email)) {
        setError(true);
      } else {
        setDataToLS('users', [...users, data]);
        navigate('/signin');
      }
    } else {
      setDataToLS('users', [data]);
      navigate('/signin');
    }
  };
  const handleClickLoginButton = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/signin');
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
  const loginRegister = register('login', {
    required: {
      value: true,
      message: VALIDATE_CONFIG.requiredMessage,
    },
    pattern: {
      value: LOGIN_REGEXP,
      message: VALIDATE_CONFIG.loginMessage,
    },
  });

  return (
    <Form title="Registration" handleFormSubmit={handleSubmit(sendRegisterLS)}>
      <input
        className={cn(s.input, s[useTheme('input')])}
        {...loginRegister}
        id="login"
        type="text"
        placeholder="login"
      />
      {errors?.login && <ErrorMessage>{errors?.login?.message}</ErrorMessage>}
      <input
        className={cn(s.input, s[useTheme('input')])}
        {...emailRegister}
        id="email"
        type="email"
        placeholder="email"
      />
      {error && <ErrorMessage>This email is already registered.</ErrorMessage>}
      {errors?.email && <ErrorMessage>{errors?.email?.message}</ErrorMessage>}

      <input
        className={cn(s.input, s[useTheme('input')])}
        {...passwordRegister}
        type="password"
        placeholder="password"
      />

      {errors?.password && (
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
      )}
      <div className={s.btnGroup}>
        <Button classTitle="login" onClick={handleSubmit(sendRegisterLS)}>
          register
        </Button>
        <Button classTitle="login" onClick={handleClickLoginButton}>
          Signin
        </Button>
      </div>
    </Form>
  );
};
