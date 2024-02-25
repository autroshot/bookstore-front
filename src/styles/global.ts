import 'sanitize.css';
import { createGlobalStyle } from 'styled-components';
import { ThemeName } from './theme';

const GlobalStyle = createGlobalStyle<Props>`
    body {
        padding: 0;
        margin: 0;
    }

    h1 {
        margin: 0;
    }

    * {
        color: ${(props) => (props.themeName === 'light' ? 'black' : 'white')}
    }
`;

interface Props {
    themeName: ThemeName;
}

export { GlobalStyle };
