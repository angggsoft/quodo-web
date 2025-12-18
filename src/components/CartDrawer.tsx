// src/components/CartDrawer.tsx
import { XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  return (
    <>
      {/* 1. BACKDROP (Fondo oscuro) */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* 2. EL PANEL LATERAL (Drawer) */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          
          {/* Encabezado del Carrito */}
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <ShoppingBagIcon className="h-6 w-6 text-sky-500" />
              Tu Carrito
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition">
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Cuerpo del Carrito (Vacío por ahora) */}
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
            <div className="bg-gray-50 p-6 rounded-full mb-4">
                <ShoppingBagIcon className="h-16 w-16 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Tu carrito está vacío</h3>
            <p className="text-gray-500">Parece que aún no has agregado ningún producto.</p>
          </div>

          {/* Pie del Carrito (Botón de Pagar) */}
          <div className="p-6 border-t border-gray-100">
            <div className="flex justify-between mb-4 text-lg font-bold text-gray-800">
                <span>Total</span>
                <span>$0.00</span>
            </div>
            <button 
                disabled 
                className="w-full bg-gray-200 text-gray-400 font-bold py-4 rounded-xl cursor-not-allowed"
            >
                Proceder al Pago
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default CartDrawer;