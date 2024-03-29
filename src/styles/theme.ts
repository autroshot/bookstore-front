const light: Theme = {
    name: 'light',
    color: {
        primary: '#ff5800',
        secondary: '#5F5F5F',
        background: 'lightgray',
        third: 'green',
        border: 'grey',
        text: 'black',
    },
    heading: {
        large: {
            fontSize: '2rem',
        },
        medium: {
            fontSize: '1.5rem',
        },
        small: {
            fontSize: '1rem',
        },
    },
    button: {
        large: {
            fontSize: '1.5rem',
            padding: '1rem 2rem',
        },
        medium: {
            fontSize: '1rem',
            padding: '0.5rem 1rem',
        },
        small: {
            fontSize: '0.75rem',
            padding: '0.25rem 0.5rem',
        },
    },
    buttonScheme: {
        primary: {
            color: 'white',
            backgroundColor: 'midnightblue',
        },
        normal: {
            color: 'black',
            backgroundColor: 'lightgrey',
        },
    },
    borderRadius: {
        default: '4px',
    },
    layout: {
        width: {
            large: '1020px',
            medium: '760px',
            small: '320px',
        },
    },
};

const dark: Theme = {
    ...light,
    name: 'dark',
    color: {
        primary: 'coral',
        background: 'midnightblue',
        secondary: 'darkblue',
        third: 'darkgreen',
        border: 'grey',
        text: 'black',
    },
};

function getTheme(themeName: ThemeName): Theme {
    switch (themeName) {
        case 'light':
            return light;
        case 'dark':
            return dark;
    }
}

type ColorKey =
    | 'primary'
    | 'background'
    | 'secondary'
    | 'third'
    | 'border'
    | 'text';
type ThemeName = 'light' | 'dark';
type HeadingSize = 'large' | 'medium' | 'small';
type ButtonSize = 'large' | 'medium' | 'small';
type ButtonScheme = 'primary' | 'normal';
type LayoutWidth = 'large' | 'medium' | 'small';

interface Theme {
    name: ThemeName;
    color: {
        [key in ColorKey]: string;
    };
    heading: {
        [key in HeadingSize]: {
            fontSize: string;
        };
    };
    button: {
        [key in ButtonSize]: {
            fontSize: string;
            padding: string;
        };
    };
    buttonScheme: {
        [key in ButtonScheme]: {
            color: string;
            backgroundColor: string;
        };
    };
    borderRadius: {
        default: string;
    };
    layout: {
        width: {
            [key in LayoutWidth]: string;
        };
    };
}

export { dark, getTheme, light };
export type {
    ButtonScheme,
    ButtonSize,
    ColorKey,
    HeadingSize,
    LayoutWidth,
    ThemeName,
};
