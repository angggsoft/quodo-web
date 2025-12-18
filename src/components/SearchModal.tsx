// src/components/SearchModal.tsx

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, MagnifyingGlassIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 1. EL ÍNDICE DE TU SITIO (Aquí definimos qué se puede buscar)
const SEARCH_ITEMS = [
  { title: "Inicio", path: "/", category: "General", desc: "Página principal de Quodo" },
  { title: "Quodo Parking", path: "/productos/parking", category: "Producto", desc: "Software para estacionamientos" },
  { title: "Quodo POS", path: "/productos/pos", category: "Producto", desc: "Punto de venta para cafeterías y tiendas" },
  { title: "Quodo Cloud", path: "/cloud", category: "Plataforma", desc: "Gestión centralizada en la nube" },
  { title: "Soporte y Contacto", path: "/soporte", category: "Ayuda", desc: "Contáctanos o agenda una demo" },
  { title: "Iniciar Sesión", path: "/login", category: "Cuenta", desc: "Acceso a tu panel administrativo" },
  { title: "Productos", path: "/productos", category: "General", desc: "Ver todas nuestras soluciones" },
];

function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState(""); // Lo que escribe el usuario
  
  // Limpiar búsqueda cuando se abre/cierra
  useEffect(() => {
    setQuery("");
  }, [isOpen]);

  if (!isOpen) return null;

  // 2. LÓGICA DE FILTRADO
  const filteredItems = SEARCH_ITEMS.filter((item) => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center pt-24 px-4">
      
      {/* Fondo oscuro (Cierra al hacer clic afuera) */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Caja del Buscador */}
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100">
        
        {/* Input */}
        <div className="flex items-center border-b border-gray-100 p-4">
            <MagnifyingGlassIcon className="h-6 w-6 text-sky-500 mr-3" />
            <input 
                type="text" 
                placeholder="Buscar productos, páginas o ayuda..." 
                className="flex-1 text-lg outline-none text-gray-700 placeholder-gray-400 h-10 bg-transparent"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={onClose} className="ml-3 p-2 hover:bg-gray-100 rounded-lg text-gray-500 text-sm">
                <XMarkIcon className="h-5 w-5" />
            </button>
        </div>
        
        {/* Resultados */}
        <div className="max-h-[60vh] overflow-y-auto bg-gray-50">
            
            {/* CASO A: Si no ha escrito nada */}
            {query === "" && (
              <div className="p-8 text-center text-gray-400">
                <MagnifyingGlassIcon className="h-12 w-12 mx-auto mb-3 opacity-20" />
                <p>Escribe para empezar a buscar...</p>
              </div>
            )}

            {/* CASO B: Si escribió y NO hay resultados */}
            {query !== "" && filteredItems.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                <p>No encontramos nada para "{query}"</p>
              </div>
            )}

            {/* CASO C: Si hay resultados */}
            {query !== "" && filteredItems.length > 0 && (
              <div className="p-2">
                <p className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Resultados</p>
                <ul>
                  {filteredItems.map((item) => (
                    <li key={item.path}>
                      <Link 
                        to={item.path} 
                        onClick={onClose} // Cierra el modal al dar clic
                        className="flex items-center justify-between p-4 hover:bg-white hover:shadow-sm rounded-xl transition group cursor-pointer border border-transparent hover:border-gray-100"
                      >
                        <div className="flex items-center gap-4">
                          {/* Icono dinámico simple */}
                          <span className="bg-sky-100 text-sky-600 text-xs font-bold px-2 py-1 rounded-md">
                            {item.category}
                          </span>
                          <div>
                            <p className="font-semibold text-gray-800 group-hover:text-sky-600 transition">{item.title}</p>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          </div>
                        </div>
                        <ChevronRightIcon className="h-5 w-5 text-gray-300 group-hover:text-sky-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

        </div>

        {/* Footer del buscador */}
        <div className="bg-white border-t border-gray-100 p-3 px-6 flex justify-between items-center text-xs text-gray-400">
           <span><strong>Quodo</strong> Search</span>
           <span>{filteredItems.length} resultados</span>
        </div>

      </div>
    </div>
  );
}

export default SearchModal;