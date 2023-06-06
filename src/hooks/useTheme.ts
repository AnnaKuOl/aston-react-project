import { useContext } from 'react';

import { ThemeContext } from '../components/ThemeProvider/ThemeProvider';

export const useTheme= (selector: string):string => {
    const { theme } = useContext(ThemeContext);
    const themeStyle = theme === 'dark' ? `${selector}_dark` : '';
    return themeStyle;
}