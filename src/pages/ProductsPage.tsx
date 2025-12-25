import { Link } from 'react-router-dom';

// Imágenes
import LogoParking from '../assets/logo-parking.png';
import LogoCloud from '../assets/pos.png';

function ProductsPage() {
  return (
    <>
      {/* --- SECCIÓN PRINCIPAL --- */}
      {/* 🛑 CAMBIO: Agregamos 'flex flex-col justify-center' para centrar todo verticalmente */}
      <div className="container mx-auto px-4 py-16 max-w-7xl min-h-screen flex flex-col justify-center">

        <h2 className="text-5xl font-bold text-gray-800 mb-12 text-left">
          Nuestras soluciones
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">

          {/* Tarjeta 1: Quodo Parking */}
          <div className="flex flex-col flex-1 p-8 bg-white rounded-3xl shadow-lg border border-gray-100 transition hover:shadow-xl">
            <img 
              src={LogoParking} 
              alt="Quodo Parking" 
              className="h-48 mb-6 self-center object-contain" 
            />
            
            <p className="text-gray-600 mb-6 text-left">
              Software de escritorio robusto para administrar tu estacionamiento. Gestiona boletos, pensiones, tarifas flexibles y control de caja. La solución ideal para operar con barreras y hardware especializado.
            </p>
            
            <Link 
              to="/productos/parking" 
              className="text-xl font-bold text-sky-500 hover:text-sky-600 text-center mt-auto"
            >
              Ver más
            </Link>
          </div>

          {/* Tarjeta 2: Quodo POS */}
          <div className="flex flex-col flex-1 p-8 bg-white rounded-3xl shadow-lg border border-gray-100 transition hover:shadow-xl">
            <img 
              src={LogoCloud} 
              alt="Quodo POS" 
              className="h-48 mb-6 self-center object-contain"
            />
            
            <p className="text-gray-600 mb-6 text-left">
              Punto de Venta ágil para cafeterías y tiendas. Cobra rápido, gestiona inventarios, productos y tickets de venta. Funciona en tu computadora y se sincroniza con la nube automáticamente.
            </p>
            
            <Link 
              to="/productos/pos" 
              className="text-xl font-bold text-sky-500 hover:text-sky-600 text-center mt-auto"
            >
              Ver más
            </Link>
          </div>
          
        </div>
      </div>
    </>
  )
}
    
export default ProductsPage;