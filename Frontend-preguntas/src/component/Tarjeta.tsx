import { useEffect, useState } from "react";
import { obtenerEtiquetas, type Etiqueta } from "../api/apis";
import { useNavigate } from "react-router-dom";


export default function Tarjeta({ filtro }: { filtro: string }) {
    const [etiquetas, setEtiquetas] = useState<Etiqueta[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const cargarEtiquetas = async () => {
            try {
                const data = await obtenerEtiquetas();
                setEtiquetas(data);
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener las etiquetas:", error);
                setLoading(false);
            }
        };
        cargarEtiquetas();
    }, []);
    if (loading === true) {
        return <div>Cargando...</div>;
    }
    const etiquetasFiltradas = etiquetas.filter((etiqueta) =>
        etiqueta.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <>
            {etiquetasFiltradas.map((etiqueta) => (

                <div onClick={() => navigate(`/etiqueta/${etiqueta.nombre}`)}
                    key={etiqueta.id}
                    className='flex flex-col justify-center items-center text-center bg-gray-900/50 w-55 h-70 rounded-2xl border border-gray-700 hover:border-gray-600 cursor-pointer'>
                    <div className='w-40'>
                        < img className='w-full h-full' src={etiqueta.url} alt={etiqueta.nombre} />
                    </div>

                    <h2 className='text-white text-3xl'>{etiqueta.nombre}</h2>
                </div>
            ))}

        </>
    )
}
