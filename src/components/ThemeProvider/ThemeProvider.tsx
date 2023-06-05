import { createContext, useState } from 'react';

interface Context {
  isDark: boolean;
  toggleTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const ThemeContext = createContext<Context>({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark(!isDark);
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
