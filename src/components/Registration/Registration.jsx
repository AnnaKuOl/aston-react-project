import { useForm } from 'react-hook-form';

import { useLocation, useNavigate } from 'react-router-dom';

import {
  EMAIL_REGEXP,
  PASSWORD_REGEXP,
  VALIDATE_CONFIG,
} from '../../utils/const';
import { Form } from '../../components';

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const navigate = useNavigate();

  const sendRegisterApi = (data) => {
    console.log(data);
    navigate('/');
  };
  const handleClickLoginButton = (e) => {
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

      <p className="infoText">
        Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой
        конфиденциальности и соглашаетесь на информационную рассылку.
      </p>
      <button>Зарегистрироваться</button>
      <button onClick={handleClickLoginButton}>Войти</button>
    </Form>
  );
};
