// import { useState } from 'react';

// export function Form() {
//   const [loginValue, setLoginValue] = useState('');
//   const [passwordValue, setPasswordValue] = useState('');

//   return (
//     <form>
//       <label>
//         Login
//         <input
//           type="text"
//           placeholder="Login"
//           value={loginValue}
//           onChange={(e) => setLoginValue(e.target.value)}
//         />
//         <p>Ошибка ввода логина</p>
//       </label>
//       <label>
//         Password
//         <input
//           type="password"
//           value={passwordValue}
//           onChange={(e) => setPasswordValue(e.target.value)}
//         />
//         <p>Ошибка ввода пароля</p>
//       </label>
//     </form>
//   );
// }
interface Props {
  title: string;
  children: React.ReactNode;
  handleFormSubmit: () => void;
}
export const Form = ({ title, children, handleFormSubmit }: Props) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>{title}</h1>
      {children}
    </form>
  );
};
