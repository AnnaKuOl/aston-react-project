export const API_KEY:string = 'k_2568p91u';
export const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const LOGIN_REGEXP = /^[A-Za-z0-9]{4,16}$/;
export const VALIDATE_CONFIG = {
  requiredMessage: 'Поле обязательно к заполнению',
  loginMessage: 'Логин должен содержать от 4 до 16 латинского алфавита без спецсимволов',
  emailMessage: 'Email не соотвествует формату электронной почты',
  passwordMessage:
    'Пароль должен содержать минимум восемь символов, одну букву латинского алфавита и одну цифру',
};

export const LS_USERS_KEY= 'users';