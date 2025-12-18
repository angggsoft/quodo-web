// src/components/Navbar.tsx

import { useState } from 'react'; // Importamos useState para la interactividad
import { Link } from 'react-router-dom';
import LabelLogo from '../assets/label.png';
// Iconos
import { 
  ShoppingCartIcon, 
  MagnifyingGlassIcon, 
  UserCircleIcon 
} from '@heroicons/react/24/outline';

// Componentes del Carrito y Buscador
// (Asegúrate de que estos archivos existan en src/components/)
import CartDrawer from './CartDrawer';
import SearchModal from './SearchModal';

function Navbar() {
  // Estados para controlar si están abiertos o cerrados
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className="bg-white text-gray-800 p-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* IZQUIERDA: Logo */}
          <Link to="/" className="flex items-center">
          {/* Usamos la imagen label.png importada. Ajusta 'h-10' (altura) si es necesario */}
            <img src={LabelLogo} alt="Quodo Logo" className="h-10" /> 
            </Link>

          {/* CENTRO: Menú de Navegación */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="font-semibold text-sky-500 hover:text-sky-700">Inicio</Link>
            <Link to="/cloud" className="hover:text-sky-600">Cloud</Link>
            <Link to="/productos" className="hover:text-sky-600">Productos</Link>
            <Link to="/soporte" className="hover:text-sky-600">Soporte</Link>
          </div>

          {/* DERECHA: Iconos Interactivos */}
          <div className="flex items-center space-x-4">
            
            {/* Botón Carrito (Funcional) */}
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="text-gray-600 hover:text-sky-600 transition focus:outline-none"
            >
              <ShoppingCartIcon className="h-6 w-6" />
            </button>

            {/* Botón Búsqueda (Funcional) */}
            <button 
              onClick={() => setIsSearchOpen(true)} 
              className="text-gray-600 hover:text-sky-600 transition focus:outline-none"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            
            <div className="border-l h-6 border-gray-300"></div>

            {/* Botón Iniciar Sesión */}
            <Link to="/login" className="flex items-center space-x-2 text-gray-600 hover:text-sky-600">
              <span>Iniciar Sesión</span>
              <UserCircleIcon className="h-6 w-6" />
            </Link>
          </div>

        </div>
      </nav>

      {/* Renderizamos los componentes flotantes aquí */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}

export default Navbar;