export const API_KEY:string = 'k_c8j6yzuq';
export const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const VALIDATE_CONFIG = {
  requiredMessage: 'Поле обязательно к заполнению',
  emailMessage: 'Email не соотвествует формату электронной почты',
  passwordMessage:
    'Пароль должен содержать минимум восемь символов, одну букву латинского алфавита и одну цифру',
};
export const LS_USERS_KEY= 'users';