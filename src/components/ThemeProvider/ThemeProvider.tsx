import { createContext, useState } from 'react';

type Theme = 'light' | 'dark';

type Context = {
  theme: Theme;
  toggleTheme: () => void;
};

type Props = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<Context>({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
