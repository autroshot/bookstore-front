import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/common/error';
import { ThemeProvider } from './contexts/theme';
import Layout from './layouts/layout';
import Home from './pages/home';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
        errorElement: (
            <Layout>
                <Error />
            </Layout>
        ),
    },
    {
        path: '/books',
        element: (
            <Layout>
                <div>도서 목록</div>
            </Layout>
        ),
    },
]);

function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
