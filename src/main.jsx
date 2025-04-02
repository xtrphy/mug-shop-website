import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Products from './components/Products/Products.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Faq from './components/Faq/Faq.jsx';
import Cart from './components/Cart/Cart.jsx';
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
    {
        path: 'faq',
        element: <Faq />,
    },
    {
        path: 'cart',
        element: <Cart />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
