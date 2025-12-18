import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

// Layout
import Layout from './components/Layout';

// Páginas
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SelectBusinessPage from './pages/SelectBusinessPage';

// Páginas de Producto
import ProductsPage from './pages/ProductsPage';
import QuodoCloudPage from './pages/QuodoCloudPage';
import QuodoParkingPage from './pages/QuodoParkingPage';
import QuodoPosPage from './pages/QuodoPosPage';
import SupportPage from './pages/SupportPage';

const router = createBrowserRouter([
  {
    // Todas estas rutas usan el Layout (Barra y Footer)
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/cloud", element: <QuodoCloudPage /> },
      { path: "/productos", element: <ProductsPage /> },
      { path: "/productos/parking", element: <QuodoParkingPage /> },
      { path: "/productos/pos", element: <QuodoPosPage /> },
      { path: "/soporte", element: <SupportPage /> },
    ]
  },
  // Estas rutas NO usan el Layout (Pantalla completa)
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/cloud/select-business", element: <SelectBusinessPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)