import { createTheme, MantineProvider } from '@mantine/core';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/carousel/styles.css';
import MainLayout from './components/layout/MainLayout';
import LandingPage from './pages/LandingPage';
import ErrorPage from './components/common/ErrorPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminLayout from './components/layout/AdminLayout';
import AuthProtectedRoute from './utils/protection/AuthProtectedRoute';
import About from './pages/Aboutpage';
import Contact from './pages/Contactpage';
import UserLayout from './components/layout/UserLayout';
import StudentDashboard from './pages/StudentDashboard';
import ClientDashboard from './pages/ClientDashboard';
import AdminDashboard from './pages/AdminDashboard';
import UserProvider from './hooks/userContext'; // Corrected import

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  { path: '/auth/login', element: <LoginPage /> },
  { path: '/auth/register', element: <SignupPage /> },
  {
    path: '/student/dashboard',
    element: (
      <AuthProtectedRoute>
        <UserLayout />
      </AuthProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <StudentDashboard /> },
    ],
  },
  {
    path: '/client/dashboard',
    element: (
      <AuthProtectedRoute>
        <UserLayout />
      </AuthProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ClientDashboard /> },
    ],
  },
  {
    path: '/admin/dashboard',
    element: (
      <AuthProtectedRoute>
        <AdminLayout />
      </AuthProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AdminDashboard /> },
    ],
  },
]);

const theme = createTheme({
  fontFamily: 'Saira, sans-serif',
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
});

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </MantineProvider>
  );
};

export default App;



