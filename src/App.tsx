import { ThemeProvider } from 'styled-components';
import Layout from './layouts/layout';
import Home from './pages/home';
import { GlobalStyle } from './styles/global';
import { light } from './styles/theme';

function App() {
    return (
        <ThemeProvider theme={light}>
            <GlobalStyle themeName="light" />
            <Layout>
                <Home />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
