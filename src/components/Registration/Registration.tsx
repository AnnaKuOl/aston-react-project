import { useForm, SubmitHandler } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';

import {
  EMAIL_REGEXP,
  PASSWORD_REGEXP,
  VALIDATE_CONFIG,
} from '../../utils/const';
import { Button, Form } from '..';

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ mode: 'onBlur' });
  const navigate = useNavigate();
  type User = {
    password: string;
    email: string;
  };
  const sendRegisterApi: SubmitHandler<User> = (data) => {
    console.log(data);
    const users = localStorage.getItem('users');
    if (users) {
      const updateUsers = [...JSON.parse(users)];
      updateUsers.find((user) => user.email !== data.email)
        ? localStorage.setItem('users', JSON.stringify([...updateUsers, data]))
        : navigate('/sigin');
    } else {
      localStorage.setItem('users', JSON.stringify([data]));
    }
    navigate('/sigin');
  };
  const handleClickLoginButton = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/sigin');
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
    <Form title="Регистрация" handleFormSubmit={handleSubmit(sendRegisterApi)}>
      <input {...emailRegister} id="email" type="text" placeholder="email" />
      {errors?.email && (
        <p className="errorMessage">{errors?.email?.message}</p>
      )}

      <input {...passwordRegister} type="password" placeholder="Пароль" />

      {errors?.password && (
        <p className="errorMessage">{errors?.password?.message}</p>
      )}

      <Button onClick={handleSubmit(sendRegisterApi)}>
        Зарегистрироваться
      </Button>
      <Button onClick={handleClickLoginButton}>Войти</Button>
    </Form>
  );
};
