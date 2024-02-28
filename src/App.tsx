import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/common/error';
import { ThemeProvider } from './contexts/theme';
import Layout from './layouts/layout';
import Books from './pages/books';
import Home from './pages/home';
import Login from './pages/login';
import ResetPassword from './pages/reset-password';
import SignUp from './pages/sign-up';

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
                <Books />
            </Layout>
        ),
    },
    {
        path: '/sign-up',
        element: (
            <Layout>
                <SignUp />
            </Layout>
        ),
    },
    {
        path: '/reset-password',
        element: (
            <Layout>
                <ResetPassword />
            </Layout>
        ),
    },
    {
        path: '/login',
        element: (
            <Layout>
                <Login />
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
