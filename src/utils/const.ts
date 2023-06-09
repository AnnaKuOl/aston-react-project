export const API_KEY:string = 'k_9sn3qw2r';
export const MOVIES_ON_HOMEPAGE = 8;
export const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const LOGIN_REGEXP = /^[A-Za-z0-9]{4,16}$/;
export const VALIDATE_CONFIG = {
  requiredMessage: 'Required to fill in',
  loginMessage: 'Login should be from 4 to 16 letters or numbers without special symbols',
  emailMessage: 'Invalid email address',
  passwordMessage:
    'Password should be from 8 characters, only latin letters and should contain at least one number',
};

export const LS_USERS_KEY= 'users';