import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BuildingStorefrontIcon, TruckIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

// Definición de la estructura de datos que esperamos del servidor Java (coherente con NegocioDto)
interface Negocio {
    id: number;
    nombre: string;
    tipo: 'POS' | 'PARKING';
}

// ⚠️ CONFIGURACIÓN CRÍTICA: Endpoint definido en Main.java
const API_URL = 'https://quodo-backend.onrender.com/api/negocios';; 
const REDIRECT_BASE_URL = 'https://quodo-backend.onrender.com'; // Base de la web app de tu compañero

function SelectBusinessPage() {
    const [negocios, setNegocios] = useState<Negocio[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    // Obtenemos el token y el nombre del usuario tras el Login exitoso
    const authToken = localStorage.getItem('authToken');
    const userName = localStorage.getItem('userName');

    useEffect(() => {
        if (!authToken) {
            // Si no hay token, redirigir al login (Seguridad UI)
            navigate('/login');
            return;
        }

        const fetchNegocios = async () => {
            try {
                // 1. Petición Autenticada al CloudNegociosHandler.java
                const response = await axios.get<Negocio[]>(API_URL, {
                    headers: {
                        // Enviamos el JWT para que sea validado
                        'Authorization': `Bearer ${authToken}` 
                    }
                });

                setNegocios(response.data);
                
            } catch (err) {
                if (axios.isAxiosError(err) && err.response && err.response.status === 401) {
                    // Token inválido o expirado -> Forzar re-login
                    localStorage.clear();
                    navigate('/login');
                } else {
                    setError('Error al cargar los negocios. Revisa la conexión con el backend.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchNegocios();
    }, [authToken, navigate]);

    // Función que se ejecuta al hacer clic en una tarjeta de negocio
    const handleSelect = (negocioId: number, tipo: string) => {
        // 1. Guardamos la selección para que sea persistente si se refresca
        localStorage.setItem('selectedNegocioId', negocioId.toString());
        localStorage.setItem('selectedBusinessType', tipo);

        // 2. Fusión Final: Redirige al Dashboard Operativo de tu compañero
        window.location.href = `${REDIRECT_BASE_URL}/dashboard?negocio=${negocioId}`;
    };

    const getIcon = (tipo: string) => {
        return tipo === 'POS' ? <BuildingStorefrontIcon className="h-12 w-12 text-sky-500" /> : <TruckIcon className="h-12 w-12 text-green-500" />;
    };

    if (loading) {
        return <div className="text-center p-8">Cargando unidades de negocio...</div>;
    }

    if (error) {
        return <div className="text-center p-8 text-red-600 font-bold">{error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-light text-gray-800 mb-2">
                ¡Hola, <span className="font-semibold">{userName || 'Administrador'}</span>! 👋
            </h1>
            <p className="text-gray-500 mb-8">Selecciona la unidad que deseas administrar:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {negocios.map((negocio) => (
                    <div 
                        key={negocio.id}
                        onClick={() => handleSelect(negocio.id, negocio.tipo)}
                        className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-sky-500 hover:shadow-2xl transition duration-300 cursor-pointer flex items-center space-x-4"
                    >
                        {getIcon(negocio.tipo)}
                        <div>
                            <p className="text-xl font-semibold text-gray-800">{negocio.nombre}</p>
                            <p className="text-sm text-gray-500 mt-1">
                                Tipo: <span className="font-medium text-sky-700">{negocio.tipo}</span>
                            </p>
                        </div>
                        <ArrowRightIcon className="h-5 w-5 text-gray-400 ml-auto" />
                    </div>
                ))}
            </div>

            {negocios.length === 0 && (
                <div className="text-center p-20 border-2 border-dashed rounded-xl mt-10">
                    <p className="text-gray-500">No tienes negocios asociados.</p>
                </div>
            )}
        </div>
    );
}

export default SelectBusinessPage;