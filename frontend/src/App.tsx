import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import RootLayout from './layouts/RootLayout';
import AuthLayout from './layouts/AuthLayout';
import {
  About,
  Support,
  Login,
  Signup,
  AppLogin,
  Home,
  Inbox,
  UserProfile,
  ImportProduct,
  AppStocks,
  AppDeals,
  AppInventory,
  AppSetting,
} from './pages';
import { ProtectedRoute } from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/app/home" replace /> },
      { path: 'about', element: <About /> },
      { path: 'support', element: <Support /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
    ],
  },
  {
    path: '/app',
    children: [
      { index: true, element: <Navigate to="/app/home" replace /> },
      { path: 'login', element: <AppLogin /> },
      { path: 'signup', element: <Signup /> },
      {
        element: (
          <ProtectedRoute loginPath="/app/login" allowedRoles={['user']}>
            <AppLayout />
          </ProtectedRoute>
        ),
        children: [
          { path: 'home', element: <Home /> },
          { path: 'stocks', element: <AppStocks /> },
          { path: 'deals', element: <AppDeals /> },
          { path: 'inventory', element: <AppInventory /> },
          { path: 'import-product', element: <ImportProduct /> },
          { path: 'setting', element: <AppSetting /> },
          { path: 'inbox', element: <Inbox /> },
          { path: 'user/:userId', element: <UserProfile /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
