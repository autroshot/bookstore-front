type ColorKey = 'primary' | 'background' | 'secondary' | 'third';
type ThemeName = 'light' | 'dark';

interface Theme {
    name: ThemeName;
    color: {
        [key in ColorKey]: string;
    };
}

const light: Theme = {
    name: 'light',
    color: {
        primary: 'brown',
        background: 'lightgray',
        secondary: 'blue',
        third: 'green',
    },
};

const dark: Theme = {
    name: 'dark',
    color: {
        primary: 'coral',
        background: 'midnightblue',
        secondary: 'darkblue',
        third: 'darkgreen',
    },
};

export { dark, light };
export type { ThemeName };
