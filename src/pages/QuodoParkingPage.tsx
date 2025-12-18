// src/pages/QuodoParkingPage.tsx

import { Link } from 'react-router-dom';
import { CurrencyDollarIcon, ChartBarIcon, ShieldCheckIcon, TruckIcon, DocumentTextIcon, TicketIcon, ClipboardDocumentListIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

// --- IMPORTACIÓN DE IMÁGENES ---
import LogoParking from '../assets/logo-parking.png';

// Imágenes (Usando los nombres cortos que acordamos antes)
import DashboardScreen from '../assets/dashboard.png'; 
import ReporteFlujo from '../assets/reporte.png';     

// Características
import FeatureEntradas from '../assets/feature-entradas.png';
import FeatureContratos from '../assets/feature-contratos.png';
import FeatureTarifas from '../assets/feature-tarifas.png';
import FeaturePlanes from '../assets/feature-planes.png';

function QuodoParkingPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans"> 
      
      {/* --- 1. HERO: PARKING (Estilo Premium) --- */}
      <div className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <img src={LogoParking} alt="Quodo Parking" className="h-24 mx-auto mb-8" />
            
            <span className="inline-block py-1 px-3 rounded-full bg-sky-100 text-sky-700 text-sm font-bold tracking-wide uppercase mb-6">
              Software de Escritorio
            </span>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Control Total, <span className="text-sky-500">Operación Eficiente</span>.
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              Transforma la gestión de tu estacionamiento. Desde el registro rápido de vehículos hasta el control financiero exacto. La solución robusta para operar sin interrupciones.
            </p>

            <div className="flex justify-center gap-4">
              <Link to="/soporte" className="bg-sky-500 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:bg-sky-600 hover:-translate-y-1 transition duration-300 text-lg">
                Solicitar Demo Parking
              </Link>
            </div>
          </div>

          {/* IMAGEN HERO: Dashboard Principal */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-3xl blur opacity-30"></div>
            <img 
              src={DashboardScreen} 
              alt="Dashboard Parking" 
              className="relative w-full h-auto rounded-3xl shadow-2xl border-4 border-white" 
            />
          </div>

        </div>
      </div>

      {/* --- 2. BENEFICIOS (Tarjetas Modernas) --- */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Card 1 */}
              <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition border border-slate-100 group">
                  <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <CurrencyDollarIcon className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">Aumento de Ingresos</h3>
                  <p className="text-slate-600 leading-relaxed">Evita fugas de dinero con cálculos automáticos y precisos de tarifas y tiempos.</p>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition border border-slate-100 group">
                  <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <ChartBarIcon className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">Agilidad Operativa</h3>
                  <p className="text-slate-600 leading-relaxed">Reduce drásticamente los tiempos de espera en entradas y salidas vehiculares.</p>
              </div>
              {/* Card 3 */}
              <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition border border-slate-100 group">
                  <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <ShieldCheckIcon className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">Seguridad y Control</h3>
                  <p className="text-slate-600 leading-relaxed">Registro detallado de cada movimiento y control de acceso por usuario.</p>
              </div>
          </div>
        </div>
      </div>

      {/* --- 3. GALERÍA DEL SISTEMA (Diseño Bento Grid) --- */}
      <div className="container mx-auto px-4 py-24 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Diseñado para la operación diaria
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Herramientas potentes e intuitivas para cubrir cada necesidad de tu estacionamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* 1. Entradas y Salidas */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 overflow-hidden group">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-sky-100 p-3 rounded-xl"><TruckIcon className="h-8 w-8 text-sky-600"/></div>
                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Registro Vehicular</h3>
                </div>
                <p className="text-slate-600 mb-8">Control ágil de entradas y salidas. Emisión rápida de boletos.</p>
                <img src={FeatureEntradas} className="w-full rounded-xl shadow-lg border border-slate-100 group-hover:scale-105 transition duration-500" alt="Entradas" />
            </div>

            {/* 2. Contratos/Pensiones */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 overflow-hidden group">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-sky-100 p-3 rounded-xl"><DocumentTextIcon className="h-8 w-8 text-sky-600"/></div>
                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Gestión de Pensiones</h3>
                </div>
                <p className="text-slate-600 mb-8">Administra contratos, clientes recurrentes y sus fechas de vencimiento.</p>
                <img src={FeatureContratos} className="w-full rounded-xl shadow-lg border border-slate-100 group-hover:scale-105 transition duration-500" alt="Contratos" />
            </div>

             {/* 3. Tarifas (Fondo oscuro para contraste) */}
            <div className="bg-slate-900 rounded-[2.5rem] p-10 shadow-xl overflow-hidden text-white relative group lg:col-span-2">
                <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="md:w-1/2">
                         <div className="flex items-center gap-4 mb-6">
                            <div className="bg-sky-500 p-3 rounded-xl"><CurrencyDollarIcon className="h-8 w-8 text-white"/></div>
                            <h3 className="text-3xl font-bold tracking-tight">Tarifas Flexibles</h3>
                        </div>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Configura cualquier esquema de cobro: por hora, fracción, tarifa fija, tarifa máxima diaria, o precios especiales para fines de semana y noches.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img src={FeatureTarifas} className="w-full rounded-xl shadow-2xl border border-slate-700 group-hover:scale-105 transition duration-500" alt="Tarifas" />
                    </div>
                </div>
            </div>

            {/* 4. Planes */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 overflow-hidden group">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-sky-100 p-3 rounded-xl"><TicketIcon className="h-8 w-8 text-sky-600"/></div>
                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Planes de Pensión</h3>
                </div>
                <p className="text-slate-600 mb-8">Crea paquetes a medida (mensual, semanal, 24 horas, diurno) para tus clientes.</p>
                <img src={FeaturePlanes} className="w-full rounded-xl shadow-lg border border-slate-100 group-hover:scale-105 transition duration-500" alt="Planes" />
            </div>

            {/* 5. Reportes (El grande) */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 overflow-hidden group lg:row-span-2">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-sky-100 p-3 rounded-xl"><ArrowTrendingUpIcon className="h-8 w-8 text-sky-600"/></div>
                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Reportes Financieros</h3>
                </div>
                <p className="text-slate-600 mb-8">Control total del flujo de caja. Audita ingresos, turnos y detecta diferencias al instante.</p>
                <img src={ReporteFlujo} className="w-full rounded-xl shadow-lg border border-slate-100 group-hover:scale-105 transition duration-500 h-auto object-cover" alt="Reporte de Flujo" />
            </div>
        </div>
      </div>

      {/* --- 4. RESUMEN FINAL --- */}
      <div className="bg-sky-900 py-24 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <ClipboardDocumentListIcon className="h-24 w-24 text-sky-300 mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-8 tracking-tight">¿Por qué elegir Quodo Parking?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left text-sky-100 text-lg">
                <ul className="space-y-4">
                    <li className="flex items-start gap-3"><span className="text-sky-400 mt-1">✓</span>Agiliza entradas y salidas drásticamente.</li>
                    <li className="flex items-start gap-3"><span className="text-sky-400 mt-1">✓</span>Flexibilidad total en configuración de tarifas.</li>
                    <li className="flex items-start gap-3"><span className="text-sky-400 mt-1">✓</span>Administración sencilla de pensiones.</li>
                </ul>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3"><span className="text-sky-400 mt-1">✓</span>Control financiero y cierres de caja precisos.</li>
                    <li className="flex items-start gap-3"><span className="text-sky-400 mt-1">✓</span>Reportes detallados para toma de decisiones.</li>
                    <li className="flex items-start gap-3"><span className="text-sky-400 mt-1">✓</span>Seguridad y permisos de usuario avanzados.</li>
                </ul>
            </div>
        </div>
      </div>

    </div>
  );
}

export default QuodoParkingPage;