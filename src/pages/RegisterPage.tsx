import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// 1. ICONOS
import { UserIcon, EnvelopeIcon, LockClosedIcon, ShoppingCartIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

// 2. IMÁGENES Y LOGOS
import QuodoLogoBlue from '../assets/logo-cloud.png'; 
import Logo from '../assets/logo.png'; 
import LogoWhite from '../assets/logo-white.png'; 
import cityImageUrl from '../assets/manhattan-skyline.jpg'; 

const RegisterPage: React.FC = () => {
// --- ESTADO Y LÓGICA (Tu código original) ---
 const [nombre, setNombre] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');
 const navigate = useNavigate();

const handleRegister = async (e: React.FormEvent) => {
 e.preventDefault();
 setError('');

    // =======================================================
    //  VALIDACIONES AGREGADAS
    // =======================================================

    // 1. VALIDAR LONGITUD DEL NOMBRE (Máximo 35 caracteres)
    if (nombre.length > 35) {
        setError('El nombre completo no puede exceder los 35 caracteres.');
        return; 
    }

    // 2. VALIDAR LONGITUD DE LA CONTRASEÑA (Mínimo 8 caracteres)
    if (password.length < 8) {
        setError('La contraseña debe tener al menos 8 caracteres.');
        return;
    }

    // 3. VALIDAR FORMATO DE CORREO ELECTRÓNICO
    // Expresión Regular simple para verificar: texto@texto.dominio(2 o más caracteres)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/; 

    if (!emailRegex.test(email)) {
        setError('El correo electrónico no es válido (ej: nombre@dominio.com).');
        return;
    }

    // =======================================================
    // 🛑 VALIDACIONES RECOMENDADAS ADICIONALES
    // =======================================================

    // 4. VALIDACIÓN DE COMPLEJIDAD DE CONTRASEÑA
    const passwordComplexityRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/; 
    if (!passwordComplexityRegex.test(password)) {
        setError('La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula y un número.');
        return;
    }
    
    // 5. VALIDACIÓN DE CARACTERES EN EL NOMBRE
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!nameRegex.test(nombre)) {
        setError('El nombre solo debe contener letras y espacios.');
        return;
    }

    // 6. VALIDACIÓN DE LONGITUD RAZONABLE DEL DOMINIO (Anti-Spam/Anti-Bot)
    // Esto verifica que la parte después del @ no sea exageradamente larga (ejemplo: max 25 caracteres totales)
    const domainPart = email.substring(email.indexOf('@') + 1);
    if (domainPart.length > 25) {
        setError('La parte del dominio (después de @) es demasiado larga.');
        return;
    }

    

    // =======================================================
    // FIN DE VALIDACIONES
    // =======================================================
   

 try {
 const response = await fetch('https://quodo-backend.onrender.com/api/auth/register', { // Asegúrate que la ruta sea correcta en tu backend
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ nombre, email, password }),
 });

 const data = await response.json();

 if (response.ok) {
 alert('¡Cuenta creada con éxito! Ahora inicia sesión.');
 navigate('/login'); 
 } else {
 setError(data.error || 'Error al registrarse');
 }
 } catch (err) {
setError('No se pudo conectar con el servidor Java');
 }
 };

 return (
 // --- FONDO DE MANHATTAN ---
 <div 
className="h-screen w-full bg-cover bg-center relative"
style={{ backgroundImage: `url(${cityImageUrl})` }}
 >
 {/* Capa oscura */}
 <div className="absolute inset-0 bg-black/40"></div>

 {/* --- NAVBAR TRANSPARENTE --- */}
 <nav className="bg-transparent text-white p-4 absolute top-0 left-0 right-0 z-50">
 <div className="container mx-auto flex justify-between items-center">

 <Link to="/" className="flex items-center space-x-2">
 <img src={Logo} alt="Quodo Logo" className="h-8" />
 <span className="text-3xl font-bold text-white lowercase">quodo</span>
 </Link>

 <div className="hidden md:flex space-x-6">
 <Link to="/" className="font-semibold text-white hover:text-gray-200">Inicio</Link>
 <Link to="/cloud" className="hover:text-gray-200">Cloud</Link>
 <Link to="/productos" className="hover:text-sky-500 transition">Productos</Link>
 </div>

 <div className="flex items-center space-x-4">
<ShoppingCartIcon className="h-6 w-6 text-white" />
<MagnifyingGlassIcon className="h-6 w-6 text-white" />
<div className="border-l h-6 border-gray-300"></div>
<div className="flex items-center gap-2">
 <span>Crear Cuenta</span>
 <UserCircleIcon className="h-6 w-6 text-white" />
</div>
 </div>
</div>
 </nav>

 {/* --- FORMULARIO CENTRADO (GLASSMORPHISM) --- */}
 <div className="h-full w-full flex items-center justify-center relative z-10 pt-16">
 <div className="bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md mx-4 border border-white/20">

 <div className="flex flex-col items-center">
 <img src={QuodoLogoBlue} alt="Quodo Logo" className="h-14 mb-6 drop-shadow-md" />
 
 <h2 className="text-2xl font-bold text-white mb-6 text-center shadow-black drop-shadow-md">Únete a Quodo</h2>
 <form className="w-full space-y-5" onSubmit={handleRegister}> 

 {/* CAMPO NOMBRE */}
 <div className="relative">
 <span className="absolute left-3 top-1/2 -translate-y-1/2">
 <UserIcon className="h-6 w-6 text-sky-500" />
 </span>
 <input 
 type="text" 
 placeholder="Nombre Completo"
 value={nombre}
 onChange={(e) => setNombre(e.target.value)}
 className="w-full bg-transparent border-b-2 border-sky-500/50 text-white placeholder-white/80 py-3 pl-12 focus:outline-none focus:border-sky-300 transition font-medium"
 required
 />
 </div>

 {/* CAMPO EMAIL */}
 <div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2">
 <EnvelopeIcon className="h-6 w-6 text-sky-500" />
 </span>
<input 
 type="email" 
 placeholder="Correo Electrónico"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 className="w-full bg-transparent border-b-2 border-sky-500/50 text-white placeholder-white/80 py-3 pl-12 focus:outline-none focus:border-sky-300 transition font-medium"
 required
 />
 </div>

 {/* CAMPO PASSWORD */}
 <div className="relative">
 <span className="absolute left-3 top-1/2 -translate-y-1/2">
 <LockClosedIcon className="h-6 w-6 text-sky-500" />
 </span>
 <input 
 type="password" 
 placeholder="Contraseña"
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 className="w-full bg-transparent border-b-2 border-sky-500/50 text-white placeholder-white/80 py-3 pl-12 focus:outline-none focus:border-sky-300 transition font-medium"
required
 />
 </div>

 {error && (
 <p className="text-center text-red-200 font-medium p-2 bg-red-900/50 rounded-lg border border-red-500/50 text-sm">
{error}
 </p>
 )}

 <button 
 type="submit"
 className="w-full bg-sky-500 text-white font-bold py-3 rounded-full shadow-lg hover:bg-sky-600 transition duration-300 transform active:scale-95 mt-4"
 >
 Registrarse Gratis
 </button>

 {/* ENLACE AL LOGIN */}
 <div className="mt-4 text-center border-t border-white/20 pt-4">
 <p className="text-sm text-white/90 mb-2">¿Ya tienes cuenta?</p>
 <Link 
 to="/login" 
 className="text-sky-300 font-bold hover:text-white transition hover:underline text-lg"
>
 Inicia Sesión aquí
 </Link>
 </div>

 </form>
 </div>
 </div>
 </div>

{/* --- FOOTER COMPLETO (Corregido) --- */}
 <footer className="bg-transparent text-white p-6 absolute bottom-0 left-0 right-0 z-50">
<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center max-w-7xl">

 {/* 1. Logo Izquierda */}
<div className="flex items-center mb-4 md:mb-0">
 <img src={LogoWhite} className="h-10" alt="Logo" />
 </div>

 {/* 2. Información Central (Faltaba esto) */}
 <div className="text-center mb-4 md:mb-0">
<p className="font-bold">Contacto</p>
 <p>quodo@outlook.com</p>
<p className="text-xs text-gray-300 mt-1">© 2025 Quodo. Todos los derechos reservados.</p>
 </div>

 {/* 3. Redes Derecha */}
 <div className="flex gap-4">
 <FaWhatsapp className="h-6 w-6 hover:text-sky-300 cursor-pointer transition" />
<FaInstagram className="h-6 w-6 hover:text-sky-300 cursor-pointer transition" />
<FaFacebook className="h-6 w-6 hover:text-sky-300 cursor-pointer transition" />
 </div>
</div>
</footer>
    </div>
  );
};

export default RegisterPage;