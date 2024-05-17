import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from '../pages/Main/Main.tsx'
import NotFound from '../pages/NotFound/NotFound.tsx'
import Profile from '../pages/Profile/Profile.tsx'
import Auth from '../pages/Auth/Auth.tsx'
import Layout from '../Layout.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Main />,
                
            },
            {
                path: '/profile/:profileId',
                element: <Profile />,
            },
            {
                path: '/auth',
                element: <Auth />,

            },
            {
                path: '/logout',
                element: <Auth />,

            },
        ]
    },

])

export const MainRouterProvider = () => <RouterProvider router={router} />
