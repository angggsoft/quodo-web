import { Link } from 'react-router-dom';
import { ShoppingBagIcon, ArchiveBoxIcon, ComputerDesktopIcon, CloudArrowUpIcon, ChartBarIcon, TagIcon } from '@heroicons/react/24/outline';
// Logo Azul
import Logopos from '../assets/pos1.png'; 
// --- IMÁGENES DEL SISTEMA (Asegúrate de tenerlas) ---
import CloudPos from '../assets/cloud-pos.jpg';           // Gráfica de "Top Productos"
import CloudProductos from '../assets/cloud-productos.jpg'; // Lista de "Gestión de Productos"



function QuodoPosPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans"> 
      
      {/* --- 1. HERO: PUNTO DE VENTA --- */}
      <div className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          <div className="text-center max-w-8xl mx-auto mb-16">
            <img src={Logopos} alt="Quodo POS" className="h-80 mx-auto mb-16" />
            
            <span className="inline-block py-1 px-3 rounded-full bg-sky-100 text-sky-700 text-sm font-bold tracking-wide uppercase mb-6">
              Ventas y Control
            </span>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Agiliza tus <span className="text-sky-500">ventas</span> y controla tu <span className="text-sky-500">inventario</span>.
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              El sistema ideal para cafeterías, tiendas y retail. Cobra rápido, gestiona productos y sincroniza todo en la nube automáticamente.
            </p>

            <div className="flex justify-center gap-4">
              <Link to="/soporte" className="bg-sky-500 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:bg-sky-600 hover:-translate-y-1 transition duration-300 text-lg">
                Solicitar Demo POS
              </Link>
            </div>
          </div>

          {/* IMAGEN HERO: Top Productos (Análisis) */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-3xl blur opacity-30"></div>
            <img 
              src={CloudPos} 
              alt="Análisis de Ventas POS" 
              className="relative w-full h-auto rounded-3xl shadow-2xl border-4 border-white" 
            />
          </div>

        </div>
      </div>

      {/* --- 2. CARACTERÍSTICAS (Grid) --- */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition border border-slate-100 group">
                  <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <ShoppingBagIcon className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">Venta Rápida</h3>
                  <p className="text-slate-600">Interfaz optimizada para cobrar en segundos y reducir filas en tu negocio.</p>
              </div>
              <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition border border-slate-100 group">
                  <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <ArchiveBoxIcon className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">Inventarios</h3>
                  <p className="text-slate-600">Control de stock en tiempo real. Registra entradas, salidas y mermas fácilmente.</p>
              </div>
              <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition border border-slate-100 group">
                  <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <ComputerDesktopIcon className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">Sistema Híbrido</h3>
                  <p className="text-slate-600">Funciona fluido en tu computadora y respalda toda la información en la nube.</p>
              </div>
          </div>
        </div>
      </div>

      {/* --- 3. GALERÍA DEL SISTEMA (Estilo Premium) --- */}
      <div className="container mx-auto px-4 py-24 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Todo lo que tu comercio necesita
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Herramientas visuales para administrar productos y entender a tus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Tarjeta 1: Gestión de Productos */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 overflow-hidden group">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-sky-100 p-3 rounded-xl"><TagIcon className="h-8 w-8 text-sky-600"/></div>
                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Catálogo de Productos</h3>
                </div>
                <p className="text-slate-600 mb-8">
                    Da de alta tus productos con facilidad. Asigna precios, categorías, códigos de barras y controla las existencias disponibles.
                </p>
                <img src={CloudProductos} className="w-full rounded-xl shadow-lg border border-slate-100 group-hover:scale-105 transition duration-500" alt="Lista de Productos" />
            </div>

            {/* Tarjeta 2: Analítica (Fondo Oscuro) */}
            <div className="bg-slate-900 rounded-[2.5rem] p-10 shadow-xl overflow-hidden text-white relative group">
                <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="bg-sky-500 p-3 rounded-xl"><ChartBarIcon className="h-8 w-8 text-white"/></div>
                    <h3 className="text-2xl font-bold tracking-tight">Conoce a tus clientes</h3>
                </div>
                <p className="text-slate-300 mb-8 relative z-10">
                    No vendas a ciegas. Nuestro módulo de análisis te dice cuáles son tus productos estrella y cuáles no se están vendiendo.
                </p>
                <img src={CloudPos} className="w-full rounded-xl shadow-2xl border border-slate-700 relative z-10 group-hover:scale-105 transition duration-500" alt="Analítica POS" />
            </div>

        </div>
      </div>

      {/* --- 4. INTEGRACIÓN CLOUD --- */}
      <div className="bg-sky-50 py-24 border-t border-sky-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <CloudArrowUpIcon className="h-24 w-24 text-sky-500 mx-auto mb-8" />
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Conectado a Quodo Cloud</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Aunque operes en tu local, toda tu información se respalda y centraliza en la nube. Si tienes varias sucursales, adminístralas todas desde un solo lugar.
            </p>
            <Link to="/cloud" className="text-sky-600 font-bold text-xl hover:underline flex items-center justify-center gap-2">
                Conoce más sobre la Centralización Cloud <span>&rarr;</span>
            </Link>
        </div>
      </div>

    </div>
  );
}

export default QuodoPosPage;