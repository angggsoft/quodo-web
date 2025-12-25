import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

// 1. ICONOS
import { ShoppingCartIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

// 2. LOGOS
import Logo from '../assets/logo.png'; 
import Label from '../assets/label.png'; 
import LogoWhite from '../assets/logo-white.png'; 

// 3. IMPORTAMOS TUS COMPONENTES
import SearchModal from './SearchModal';
import CartDrawer from './CartDrawer';

const Layout: React.FC = () => {
  // Estados para abrir/cerrar buscador y carrito
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      
      {/* ==================================================================
          NAVBAR MAESTRA
         ================================================================== */}
      <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
        
        {/* Usamos 'relative' en el contenedor para poder centrar el menú absolutamente */}
        <div className="container mx-auto px-4 flex items-center justify-between relative">
            
            {/* 1. IZQUIERDA: LOGO + LABEL */}
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center space-x-2 z-10">
                {/* 🛑 CAMBIO AQUÍ: Aumentamos a h-10 para igualar al Login */}
                <img src={Logo} alt="Quodo Icon" className="h-10" />
                {/* 🛑 CAMBIO AQUÍ: Aumentamos a h-9 (en desktop) para proporción correcta */}
                <img src={Label} alt="Quodo Label" className="h-8 md:h-9 object-contain" />
            </Link>

            {/* 2. CENTRO: MENÚ (Posicionado absolutamente al centro) */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex space-x-8 font-medium text-gray-600">
                <Link to="/" className="hover:text-sky-500 transition">Inicio</Link>
                <Link to="/cloud" className="hover:text-sky-500 transition">Cloud</Link>
                <Link to="/productos" className="hover:text-sky-500 transition">Productos</Link>
                <Link to="/soporte" className="hover:text-sky-500 transition">Soporte</Link>
            </div>

            {/* 3. DERECHA: ICONOS Y LOGIN */}
            <div className="flex items-center space-x-6 z-10">
                <div className="flex items-center space-x-4 text-gray-400">
                    
                    {/* Botón Carrito -> Abre el Drawer */}
                    <button 
                        onClick={() => setIsCartOpen(true)}
                        className="hover:text-sky-500 transition transform hover:scale-110 outline-none"
                    >
                        <ShoppingCartIcon className="h-6 w-6" />
                    </button>

                    {/* Botón Lupa -> Abre el Search */}
                    <button 
                        onClick={() => setIsSearchOpen(true)}
                        className="hover:text-sky-500 transition transform hover:scale-110 outline-none"
                    >
                        <MagnifyingGlassIcon className="h-6 w-6" />
                    </button>

                </div>
                
                <div className="h-6 w-px bg-gray-300 hidden md:block"></div>

                <div className="flex items-center gap-4">
                    <Link to="/login" className="flex items-center gap-2 text-gray-600 font-bold hover:text-sky-500">
                        <span className="hidden md:block">Iniciar Sesión</span><UserCircleIcon className="h-7 w-7" />
                    </Link>
                    <Link to="/register" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-5 rounded-full shadow transition hover:shadow-lg">
                        Crear Cuenta
                    </Link>
                </div>
            </div>
        </div>
      </nav>

      {/* ==================================================================
          CONTENIDO DE LA PÁGINA
         ================================================================== */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* ==================================================================
          FOOTER MAESTRO
         ================================================================== */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center max-w-7xl">
          <div className="mb-6 md:mb-0">
            <img src={LogoWhite} alt="Logo" className="h-10" />
          </div>
          <div className="text-center mb-6 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Contacto</h4>
            <p className="text-gray-400">quodo@outlook.com</p>
            <p className="text-sm text-gray-500 mt-2">© 2025 Quodo. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-sky-500 transition transform hover:scale-110"><FaWhatsapp className="h-6 w-6" /></a>
            <a href="#" className="hover:text-sky-500 transition transform hover:scale-110"><FaInstagram className="h-6 w-6" /></a>
            <a href="#" className="hover:text-sky-500 transition transform hover:scale-110"><FaFacebook className="h-6 w-6" /></a>
          </div>
        </div>
      </footer>

      {/* 4. RENDERIZADO DE MODALES (FLOTANTES) */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />

    </div>
  );
};

export default Layout;