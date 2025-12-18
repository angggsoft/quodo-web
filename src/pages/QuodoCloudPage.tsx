// src/pages/QuodoCloudPage.tsx
import { Link } from 'react-router-dom';
import { GlobeAmericasIcon, DevicePhoneMobileIcon, LockClosedIcon, PresentationChartLineIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';


// --- TODAS LAS IMÁGENES ---
import CloudLogin from '../assets/cloud-login.png'; 
import CloudPos from '../assets/cloud-pos.jpg';
import CloudComparativa from '../assets/cloud-comparativa.jpg';
import CloudAdmin from '../assets/cloud-admin.jpg';
import CloudProductos from '../assets/cloud-productos.jpg';
import CloudConfig from '../assets/cloud-config.jpg';
import CloudReportes from '../assets/cloud-reportes.jpg';
import CloudDashboard from '../assets/cloud-dashboard.jpg';
import Cloud1 from '../assets/quodocloud.png';

function QuodoCloudPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans"> 
      
      {/* --- 1. HERO: CENTRALIZACIÓN (Corregido) --- */}
      <div className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            
            {/* 1. Logo (Solo la imagen) */}
        
            
           {/* 2. TÍTULO PRINCIPAL: LOGO IMAGEN */}
      <div className="flex justify-center mb-8">
      <img 
          src={Cloud1} 
          alt="Quodo Cloud" 
          className="w-full max-w-md md:max-w-2xl object-contain drop-shadow-lg" 
           />
      </div>
            
            {/* 3. SUBTÍTULO: La propuesta de valor */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Gestiona todo en un solo lugar.
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              Estacionamientos, Cafeterías, Tiendas. El cerebro que centraliza tus operaciones, usuarios y finanzas en un solo acceso seguro.
            </p>

            <div className="flex justify-center gap-4">
              <Link to="/soporte" className="bg-sky-500 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:bg-sky-600 hover:-translate-y-1 transition duration-300 text-lg">
                Agendar Demo
              </Link>
            </div>
          </div>

          {/* IMAGEN HERO */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-3xl blur opacity-30"></div>
            <img 
              src={CloudLogin} 
              alt="Centralización de Negocios" 
              className="relative w-full h-auto rounded-3xl shadow-2xl border-4 border-white" 
            />
          </div>

        </div>
      </div>

      {/* --- 2. CARACTERÍSTICAS --- */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition border border-slate-100 group">
                  <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <GlobeAmericasIcon className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">Acceso Remoto 24/7</h3>
                  <p className="text-slate-600 leading-relaxed">Tu negocio en tu bolsillo. Accede a la información en tiempo real desde cualquier navegador.</p>
              </div>
              <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition border border-slate-100 group">
                  <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <PresentationChartLineIcon className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">Control Total</h3>
                  <p className="text-slate-600 leading-relaxed">Audita cortes de caja, revisa el flujo de ingresos y detecta anomalías al instante.</p>
              </div>
              <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition border border-slate-100 group">
                  <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <DevicePhoneMobileIcon className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">100% Responsivo</h3>
                  <p className="text-slate-600 leading-relaxed">Diseñado para adaptarse perfectamente a la pantalla de tu celular o tablet.</p>
              </div>
          </div>
        </div>
      </div>

      {/* --- 3. GALERÍA --- */}
      <div className="container mx-auto px-4 py-24 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Potencia basada en datos
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Todas las herramientas administrativas que necesitas, en una sola interfaz moderna.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Dashboard */}
            <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 overflow-hidden relative">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3 relative z-10">
                        <h3 className="text-3xl font-bold text-slate-800 mb-4 tracking-tight">Dashboard Ejecutivo</h3>
                        <p className="text-slate-600 text-lg mb-6">
                            Una visión panorámica de tu negocio. Gráficas de ingresos, transacciones y ticket promedio.
                        </p>
                    </div>
                    <div className="md:w-2/3">
                        <img src={CloudDashboard} className="w-full rounded-2xl shadow-lg border border-slate-100" alt="Dashboard" />
                    </div>
                </div>
            </div>

            {/* Admin Panel */}
            <div className="lg:col-span-2 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-700 overflow-hidden relative text-white">
                 <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="md:w-1/3 relative z-10">
                        <h3 className="text-3xl font-bold mb-4 tracking-tight">Panel Administrativo</h3>
                        <p className="text-slate-300 text-lg mb-6">
                            Gestiona usuarios, permisos y suscripciones de todas tus sucursales en una sola vista centralizada.
                        </p>
                    </div>
                    <div className="md:w-2/3">
                        <img src={CloudAdmin} className="w-full rounded-2xl shadow-2xl border border-slate-600" alt="Admin Panel" />
                    </div>
                </div>
            </div>

            {/* POS */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 overflow-hidden group">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">Punto de Venta (POS)</h3>
                <p className="text-slate-600 mb-8">
                    Analiza tus productos top. ¿Qué se vende más? Toma decisiones de inventario inteligentes.
                </p>
                <img src={CloudPos} className="w-full rounded-xl shadow-md border border-slate-100 group-hover:scale-105 transition duration-500" alt="POS" />
            </div>

            {/* Comparativas */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 overflow-hidden group">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">Comparativas</h3>
                <p className="text-slate-600 mb-8">
                    Mide tu éxito. Compara el desempeño actual contra el mes anterior.
                </p>
                <img src={CloudComparativa} className="w-full rounded-xl shadow-md border border-slate-100 group-hover:scale-105 transition duration-500" alt="Comparativa" />
            </div>

            {/* Productos */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 overflow-hidden group">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">Gestión de Productos</h3>
                <p className="text-slate-600 mb-8">
                    Controla tu inventario, precios y categorías de manera visual y rápida.
                </p>
                <img src={CloudProductos} className="w-full rounded-xl shadow-md border border-slate-100 group-hover:scale-105 transition duration-500" alt="Productos" />
            </div>

            {/* Configuración */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 overflow-hidden group">
                <div className="flex items-center gap-3 mb-4">
                    <Cog6ToothIcon className="h-8 w-8 text-sky-500" />
                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Configuración</h3>
                </div>
                <p className="text-slate-600 mb-8">
                    Personaliza los datos de tu negocio y preferencias en segundos.
                </p>
                <img src={CloudConfig} className="w-full rounded-xl shadow-md border border-slate-100 group-hover:scale-105 transition duration-500" alt="Configuración" />
            </div>

        </div>
      </div>

      {/* --- 4. REPORTES Y SEGURIDAD --- */}
      <div className="bg-white py-24 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Generador de Reportes</h2>
                <img src={CloudReportes} className="w-full rounded-2xl shadow-xl border border-slate-100 mb-8" alt="Reportes" />
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    Exporta tu información a Excel con un solo clic. Filtra por sucursal, fechas o tipo de movimiento.
                </p>
            </div>

            <div className="bg-sky-50 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 text-left border border-sky-100">
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                    <LockClosedIcon className="h-10 w-10 text-sky-600" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Seguridad Bancaria</h3>
                    <p className="text-slate-600 text-lg">
                        Tus datos son lo más importante. Utilizamos encriptación SSL avanzada y realizamos copias de seguridad automáticas.
                    </p>
                </div>
            </div>

        </div>
      </div>

    </div>
  );
}

export default QuodoCloudPage;