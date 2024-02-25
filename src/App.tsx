import { ThemeProvider } from 'styled-components';
import Layout from './layouts/Layout';
import Home from './pages/Home';
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
