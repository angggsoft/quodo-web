import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// ICONOS
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

// IMÁGENES
import QuodoLogoBlue from '../assets/logo-cloud.png'; 
import Logo from '../assets/logo.png'; 
import LogoWhite from '../assets/logo-white.png'; 
import cityImageUrl from '../assets/manhattan-skyline.jpg';
import LabelLogo from '../assets/label2c.png'; 

// IMPORTAMOS TUS COMPONENTES (Para que funcionen la Lupa y el Carrito)
import SearchModal from '../components/SearchModal';
import CartDrawer from '../components/CartDrawer';

function LoginPage() {
    // const navigate = useNavigate(); // ⬅️ Ya no es necesario si usamos window.location.href

    // Estados para el Login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Estados para los Modales (Lupa y Carrito)
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // 🛑 DEFINICIONES CLAVE PARA EL DESPLIEGUE FINAL
    const API_BASE_URL = 'https://quodo-cloud-production.up.railway.app';
    // La URL a donde el usuario debe ir (servidor Java + ruta de Dashboard)
    


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true); 

        try {
            // 🛑 CORRECCIÓN 1: Llamar al endpoint /api/auth/login
            const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
                email: email, 
                password: password,
            });

            const { token, suscripcion_activa, nombre } = response.data;
            
            if (suscripcion_activa === false) {
                setError('Suscripción inactiva. Contacte a soporte.');
                setLoading(false);
                return;
            }

            // Login Exitoso: Guardar el token (para referencia)
            localStorage.setItem('authToken', token);
            localStorage.setItem('userName', nombre); 
            
            // 🛑 CORRECCIÓN FINAL: Redirigir DENTRO de la APP JAVA con el token
            // Esto cumple el objetivo de que el usuario ya esté "adentro" de la app Java.
            window.location.href = `${API_BASE_URL}/?token=${token}`;

        } catch (err) {
            setLoading(false);
            if (axios.isAxiosError(err) && err.response) {
                // Manejo de error de credenciales 401 del servidor Java
                setError('Credenciales incorrectas.');
            } else {
                // Manejo de error de conexión 
                setError('No hay conexión con el servidor.');
            }
        }
    };

    return (
        <div className="h-screen w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${cityImageUrl})` }}>
            {/* ... (Todo el diseño sin cambios) ... */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* ==================================================================
                NAVBAR (Transparente y Funcional)
                ================================================================== */}
            <nav className="bg-transparent text-white p-4 absolute top-0 left-0 right-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    
                    {/* LOGO */}
		    <Link to="/" className="flex items-center">
    			{/* Usamos LabelLogo y quitamos el texto. Aumentamos a h-10 para que destaque más */}
    			<img src={LabelLogo} alt="Quodo Logo" className="h-10" />
		    </Link>

                    {/* ENLACES CENTRALES (Corregidos para navegar bien) */}
                    <div className="hidden md:flex space-x-6 font-medium">
                        <Link to="/" className="hover:text-gray-200 transition">Inicio</Link>
                        <Link to="/cloud" className="hover:text-gray-200 transition">Cloud</Link>
                        <Link to="/productos" className="hover:text-gray-200 transition">Productos</Link>
                        <Link to="/soporte" className="hover:text-gray-200 transition">Soporte</Link>
                    </div>

                    {/* ICONOS DERECHA (Conectados a los modales) */}
                    <div className="flex items-center space-x-4">
                        
                        {/* Botón Carrito */}
                        <button 
                            onClick={() => setIsCartOpen(true)}
                            className="hover:text-sky-300 transition transform hover:scale-110"
                        >
                            <ShoppingCartIcon className="h-6 w-6 text-white" />
                        </button>

                        {/* Botón Lupa */}
                        <button 
                            onClick={() => setIsSearchOpen(true)}
                            className="hover:text-sky-300 transition transform hover:scale-110"
                        >
                            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                        </button>

                        <div className="border-l h-6 border-gray-300"></div>
                        
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Iniciar Sesión</span>
                            <UserCircleIcon className="h-6 w-6 text-white" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* ==================================================================
                FORMULARIO DE LOGIN
                ================================================================== */}
            <div className="h-full w-full flex items-center justify-center relative z-10 pt-16">
                <div className="bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md mx-4 border border-white/20">
                    <div className="flex flex-col items-center">
                        <img src={QuodoLogoBlue} alt="Quodo Logo" className="h-16 mb-8 drop-shadow-md" />

                        <form className="w-full space-y-6" onSubmit={handleSubmit}> 
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2"><UserIcon className="h-6 w-6 text-sky-300" /></span>
                                <input type="text" placeholder="Usuario" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent border-b-2 border-sky-300/50 text-white placeholder-white/80 py-3 pl-12 focus:outline-none" required />
                            </div>

                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2"><LockClosedIcon className="h-6 w-6 text-sky-300" /></span>
                                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-transparent border-b-2 border-sky-300/50 text-white placeholder-white/80 py-3 pl-12 focus:outline-none" required />
                            </div>
                            
                            {error && <p className="text-center text-red-200 bg-red-900/50 p-2 rounded border border-red-500/30">{error}</p>}

                            <button type="submit" disabled={loading} className="w-full bg-sky-500 text-white font-bold py-3 rounded-full shadow-lg hover:bg-sky-600 transition transform hover:scale-105 active:scale-95">
                                {loading ? 'Entrando...' : 'Entrar'}
                            </button>

                            <div className="mt-6 text-center border-t border-white/20 pt-4">
                                <p className="text-sm text-white/90 mb-2">¿Aún no tienes cuenta?</p>
                                <Link to="/register" className="text-sky-300 font-bold hover:text-white transition hover:underline text-lg">
                                    Crear cuenta (15 días gratis)
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* ==================================================================
                FOOTER
                ================================================================== */}
            <footer className="bg-transparent text-white p-6 absolute bottom-0 left-0 right-0 z-50">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center max-w-7xl">
                    
                    <div className="flex items-center mb-4 md:mb-0">
                        <img src={LogoWhite} className="h-10" alt="Logo" />
                    </div>

                    <div className="text-center mb-4 md:mb-0">
                        <p className="font-bold">Contacto</p>
                        <p>quodo@outlook.com</p>
                        <p className="text-xs text-gray-300 mt-1">© 2025 Quodo. Todos los derechos reservados.</p>
                    </div>

                    <div className="flex gap-4">
                        <FaWhatsapp className="h-6 w-6 hover:text-sky-300 cursor-pointer transition transform hover:scale-110" />
                        <FaInstagram className="h-6 w-6 hover:text-sky-300 cursor-pointer transition transform hover:scale-110" />
                        <FaFacebook className="h-6 w-6 hover:text-sky-300 cursor-pointer transition transform hover:scale-110" />
                    </div>
                </div>
            </footer>

            {/* ==================================================================
                MODALES FLOTANTES (Lupa y Carrito)
                ================================================================== */}
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
}

export default LoginPage;