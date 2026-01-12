import { useEffect, useState } from "react";
import { obtenerEtiquetas, type Etiqueta } from "../api/apis";

export default function Tarjeta() {
    const [etiquetas, setEtiquetas] = useState<Etiqueta[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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
    return (
        <>
            {etiquetas.map((etiqueta) => (

                <div key={etiqueta.id}
                    className='flex flex-col justify-center items-center bg-gray-900/50 w-50 h-60 rounded-2xl border border-gray-700 hover:border-gray-600 cursor-pointer'>
                    <div className='w-40'>
                        < img className='w-full h-full' src={etiqueta.url} alt={etiqueta.nombre} />
                    </div>

                    <h2 className='text-white text-4xl'>{etiqueta.nombre}</h2>
                </div>
            ))}

        </>
    )
}
