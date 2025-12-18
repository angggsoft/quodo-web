// src/pages/SupportPage.tsx
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

function SupportPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Estamos aquí para ayudarte</h1>
          <p className="text-xl text-gray-600">¿Tienes dudas sobre Quodo? Contáctanos y te responderemos a la brevedad.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* --- COLUMNA IZQUIERDA: INFORMACIÓN --- */}
          <div className="w-full md:w-1/3 bg-sky-900 text-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-8">Información de Contacto</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="h-6 w-6 text-sky-300 mt-1" />
                <div>
                  <p className="font-semibold text-sky-100">Correo Electrónico</p>
                  <a href="mailto:soporte@quodo.com.mx" className="text-lg hover:text-white transition">soporte@quodo.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <PhoneIcon className="h-6 w-6 text-sky-300 mt-1" />
                <div>
                  <p className="font-semibold text-sky-100">Teléfono / WhatsApp</p>
                  <p className="text-lg">+52  477 7899000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPinIcon className="h-6 w-6 text-sky-300 mt-1" />
                <div>
                  <p className="font-semibold text-sky-100">Oficinas</p>
                  <p className="text-lg">León, Guanajuato, México.</p>
                </div>
              </div>
            </div>

            {/* Decoración visual */}
            <div className="mt-12 pt-8 border-t border-sky-700">
               <ChatBubbleLeftRightIcon className="h-12 w-12 text-sky-500 opacity-50" />
            </div>
          </div>

          {/* --- COLUMNA DERECHA: FORMULARIO --- */}
          <div className="w-full md:w-2/3 bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition" placeholder="tu@correo.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition bg-white">
                  <option>Información sobre Quodo Parking</option>
                  <option>Información sobre Quodo Cloud</option>
                  <option>Soporte Técnico</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>

              <button type="submit" className="w-full bg-sky-500 text-white font-bold py-4 rounded-xl shadow-md hover:bg-sky-600 transform hover:-translate-y-1 transition duration-300">
                Enviar Mensaje
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
    
export default SupportPage;