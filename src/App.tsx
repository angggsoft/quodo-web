import { Routes, Route, Navigate } from 'react-router-dom';

// Importa TODAS tus páginas
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SelectBusinessPage from './pages/SelectBusinessPage';

// Páginas de Productos y Cloud
import ProductsPage from './pages/ProductsPage';
import QuodoCloudPage from './pages/QuodoCloudPage';
import QuodoParkingPage from './pages/QuodoParkingPage';
import QuodoPosPage from './pages/QuodoPosPage';
// Asegúrate de tener SupportPage si la usas, si no, comenta la ruta
// import SupportPage from './pages/SupportPage'; 

function App() {
  return (
    <Routes>
      {/* Portada */}
      <Route path="/" element={<HomePage />} />
      
      {/* Login y Registro */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      {/* Lógica de Negocio (Login Exitoso) */}
      <Route path="/cloud/select-business" element={<SelectBusinessPage />} />

      {/* Páginas de Información (Pestañas) */}
      <Route path="/cloud" element={<QuodoCloudPage />} />
      <Route path="/productos" element={<ProductsPage />} />
      
      {/* Detalles de Productos */}
      <Route path="/productos/parking" element={<QuodoParkingPage />} />
      <Route path="/productos/pos" element={<QuodoPosPage />} />
      
      {/* Ruta de Soporte (si existe) */}
      
      {/* <Route path="/soporte" element={<SupportPage />} /> */}

      {/* Comodín: Si no encuentra la ruta, vuelve al inicio */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;