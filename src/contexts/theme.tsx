import { ReactNode, createContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { ThemeName, getTheme } from '../styles/theme';

const DEFAULT_THEME_NAME = 'light';
const THEME_NAME_LOCALSTORAGE_KEY = 'theme-name';

const context: Context = {
    themeName: DEFAULT_THEME_NAME,
    toggleThemeName: () => {},
};

const ThemeContext = createContext<Context>(context);

function ThemeProvider({ children }: Props) {
    const [themeName, setThemeName] = useState<ThemeName>(DEFAULT_THEME_NAME);

    useEffect(() => {
        const themeName = localStorage.getItem(THEME_NAME_LOCALSTORAGE_KEY);

        if (!assertThemeName(themeName)) {
            localStorage.setItem(
                THEME_NAME_LOCALSTORAGE_KEY,
                DEFAULT_THEME_NAME
            );
            return;
        }
        setThemeName(themeName);
        return;
    }, []);

    const context: Context = {
        themeName,
        toggleThemeName,
    };

    return (
        <ThemeContext.Provider value={context}>
            <StyledComponentThemeProvider theme={getTheme(themeName)}>
                <GlobalStyle themeName={themeName} />
                {children}
            </StyledComponentThemeProvider>
        </ThemeContext.Provider>
    );

    function toggleThemeName() {
        const newThemeName = themeName === 'light' ? 'dark' : 'light';

        localStorage.setItem(THEME_NAME_LOCALSTORAGE_KEY, newThemeName);
        setThemeName(newThemeName);
    }
}

function assertThemeName(data: any): data is ThemeName {
    if (typeof data !== 'string') return false;
    if (data !== 'light' && data !== 'dark') return false;
    return true;
}

interface Context {
    themeName: ThemeName;
    toggleThemeName: () => void;
}

interface Props {
    children: ReactNode;
}

export { ThemeContext, ThemeProvider };
