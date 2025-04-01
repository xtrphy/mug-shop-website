import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css';

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App />,
//     },
//     // {
//     //     path: 'products',
//     //     element: <Products />,
//     // },

// ])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
