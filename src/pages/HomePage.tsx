import React from 'react';
import { Link } from 'react-router-dom';

// IMÁGENES
import cityImageUrl from '../assets/manhattan-skyline.jpg';
import IconIngresos from '../assets/icon-ingresos.png';
import IconTiempos from '../assets/icon-tiempos.png';
import IconSeguridad from '../assets/icon-seguridad.png';
import LogoParking from '../assets/logo-parking.png';
import LogoCloud from '../assets/pos.png';
import LabelLogo from '../assets/label2.png';
import BlueLogo from '../assets/label.png'; 
import DrawLogo from '../assets/quodo draw.png'; 
import DashboardImg from '../assets/cloud-dashboard.jpg';
import Cloud1 from '../assets/quodocloud.png';

const HomePage: React.FC = () => {
  return (
    <>
      {/* ✅ SIN BARRA DE NAVEGACIÓN (Viene del Layout) */}

     {/* HERO */}
      <div className="relative h-96 md:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${cityImageUrl})` }}>
        {/* Capa oscura (Overlay) */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* ✅ ESTE DIV ES EL QUE CENTRA EL CONTENIDO (Faltaba este wrapper) */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <img 
            src={LabelLogo} 
            alt="Quodo" 
            className="w-64 md:w-96 drop-shadow-md select-none object-contain" 
          />
          
          <p className="mt-4 text-xl md:text-2xl font-light tracking-widest uppercase text-gray-200"></p>
        </div>
      </div>

      {/* SIN FILAS */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 bg-sky-500 text-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-4">Gestiona tus negocios en un solo lugar</h2>
            <p className="text-lg mb-6">Sincronización en tiempo real entre tus puntos de venta y la nube.</p>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>Agiliza tus movimientos.</li>
              <li>Reduce tiempos de operación.</li>
              <li>Optimiza tus empleados y protege tus ingresos.</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
  {/* REEMPLAZO POR LA IMAGEN AZUL: */}
  <img 
      src={BlueLogo} 
      alt="Quodo" 
      // Usamos clases de tamaño similares a las del logo de arriba para mantener consistencia
      className="w-64 md:w-96 select-none object-contain" 
  />
</div>
        </div>
      </div>
      
      {/* BANNER CLOUD */}
      <div className="container mx-auto px-4">
        <div className="bg-sky-500 text-white p-8 md:p-12 my-16 rounded-3xl shadow-lg text-center">
            <h3 className="text-4xl font-bold lowercase mb-4">quodo<sup className="text-lg">®</sup></h3>
            <h2 className="text-3xl font-bold mb-4">Obtén el control total de tu negocio para operar de forma inteligente</h2>
            <p className="text-lg max-w-4xl mx-auto mb-6">Somos la solución tecnológica que está transformando la gestión de estacionamientos y puntos de venta en el mundo, integrando la automatización y la inteligencia de datos para hacer tu operación más ágil, segura y rentable.
              Unete a esta gran revolucion digital y olvidate de los cobros imrpecisos y la getion manual
            </p>
            <Link to="/cloud" className="bg-white text-sky-500 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition">Ver Quodo Cloud</Link>
        </div>
      </div>

      {/* BENEFICIOS */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-12">Beneficios</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-16">
            <div className="flex flex-col items-center"><img src={IconIngresos} className="h-40 w-40 mb-4 object-contain" /><h3 className="text-2xl font-bold text-gray-800">Aumento de<br/>Ingresos</h3></div>
            <div className="flex flex-col items-center"><img src={IconTiempos} className="h-40 w-40 mb-4 object-contain" /><h3 className="text-2xl font-bold text-gray-800">Reducción de<br/>Tiempos</h3></div>
            <div className="flex flex-col items-center"><img src={IconSeguridad} className="h-40 w-40 mb-4 object-contain" /><h3 className="text-2xl font-bold text-gray-800">Precisión y<br/>Seguridad</h3></div>
          </div>
        </div>
      </div>

      {/* PRODUCTOS */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <h2 className="text-5xl font-bold text-gray-800 mb-12 text-left">Potencia tu negocio con quodo</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          
          <div className="flex flex-col flex-1 p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
            <img src={LogoParking} className="h-48 mb-6 self-center object-contain" />
            <p className="text-gray-600 mb-6 text-left flex-grow">Software de escritorio completo para administrar tu estacionamiento Gestiona tickets, pensiones, tarifas flexibles o especiales, convenios, control de caja y reportes detallados. Optimiza tu operacion y mejora el control. </p>
            <Link to="/productos/parking" className="text-xl font-bold text-sky-500 hover:text-sky-600 text-center mt-auto">Ver más</Link>
          </div>
          
          <div className="flex flex-col flex-1 p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
            <img src={LogoCloud} className="h-48 mb-6 self-center object-contain" />
            <p className="text-gray-600 mb-6 text-left flex-grow">Punto de Venta ágil para cafeterías y tiendas. Cobra rápido, gestiona inventarios, productos y tickets de venta. Funciona en tu computadora y se sincroniza con la nube automáticamente..</p>
            <Link to="/productos/pos" className="text-xl font-bold text-sky-500 hover:text-sky-600 text-center mt-auto">Ver más</Link>
          </div>
        </div>
      </div>
      
{/* --- NUEVA SECCIÓN: QUODO CLOUD --- */}
      <div className="bg-slate-900 py-24 overflow-hidden relative">
        {/* Fondo decorativo */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* TEXTO (Izquierda) */}
            <div className="w-full lg:w-1/2 text-left">
              <div className="inline-block bg-sky-900 text-sky-300 font-bold py-1 px-4 rounded-full text-sm mb-6 border border-sky-700">
                ECOSISTEMA INTEGRAL
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Todo converge en <br/>
                <img src={Cloud1} className="h-48 mb-6 self-center object-contain" />
              </h2>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Tanto <b>Parking</b> como <b>POS</b> envían su información aquí.
                <br/><br/>
                Centraliza tus sucursales, audita tus ingresos en tiempo real y gestiona usuarios desde tu celular. Es el cerebro que mantiene tu negocio conectado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cloud" className="bg-sky-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-sky-400 transition transform hover:-translate-y-1 text-center">
                  Descubrir la Nube
                </Link>
              </div>
            </div>

            {/* IMAGEN (Derecha) */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl bg-slate-800 p-2 shadow-2xl border border-slate-700 transform md:rotate-2 hover:rotate-0 transition duration-500 ease-out">
                {/* Barra de navegador decorativa */}
                <div className="h-8 bg-slate-900 rounded-t-xl flex items-center px-4 space-x-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                {/* Imagen del Dashboard */}
                <img 
                  src={DashboardImg} 
                  alt="Dashboard Quodo Cloud" 
                  className="w-full rounded-b-lg opacity-90 hover:opacity-100 transition" 
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* --- FIN NUEVA SECCIÓN --- */}

      {/* TESTIMONIO */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">La Solución en la que Confían Negocios Como el tuyo</h2>
          <blockquote className="text-center max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 italic mb-4">"Desde que implementamos Quodo, el tiempo de procesamiento por vehículo bajó un 50% y nuestros ingresos aumentaron gracias al control total que tenemos ahora."</p>
            <footer className="text-lg text-gray-600 font-bold">• Gerente, Estacionamiento Central.</footer>
          </blockquote>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="bg-slate-500 text-white rounded-3xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para Modernizar tu Estacionamiento?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Solicita una demostración y prueba <span className="font-bold text-sky-300">Quodo Cloud gratis por 15 días</span>.</p>
          <Link to="/login" className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full text-lg shadow-md hover:bg-gray-200 inline-block">Agenda una demo</Link>
        </div>
      </div>

      {/* ✅ SIN FOOTER (Viene del Layout) */}
    </>
  );
};

export default HomePage;