import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Products from './components/Products/Products.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'products',
        element: <Products />,
    },
    {
        path: 'contacts',
        element: <Contacts />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
