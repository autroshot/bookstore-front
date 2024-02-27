import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/common/error';
import { ThemeProvider } from './contexts/theme';
import Layout from './layouts/layout';
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
                <div>도서 목록</div>
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
