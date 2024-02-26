import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';

export default function ThemeSwitcher() {
    const { themeName, toggleThemeName } = useContext(ThemeContext);

    return <button onClick={toggleThemeName}>{themeName}</button>;
}
