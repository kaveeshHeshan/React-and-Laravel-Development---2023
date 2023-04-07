import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from './components/AdminDashboard';
import GuestLayout from './components/GuestLayout';
import Login from './components/Login';
import Register from './components/Register';
import Products from "./components/Products";
import Profile from "./components/Profile";

const router = createBrowserRouter([

    {
        path: '/admin/dashboard',
        element: <AdminDashboard />,
    },
    {
        path: '/admin/products',
        element: <Products />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Register />
            },
        ]
    }
])

export default router