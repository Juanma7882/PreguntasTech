
import { useEffect, useState } from "react";
import { obtenerEtiquetaConPregunta, type Pregunta } from "../api/apis";


function PreguntasEtiqueta() {
    const [rspApi, setRspApi] = useState<Pregunta[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [blurRespuesta, setBlurRespuesta] = useState<boolean>(false);
    useEffect(() => {

        const cargarPreguntasPorEtiqueta = async () => {

            try {
                const rsp = await obtenerEtiquetaConPregunta("javascript");
                setRspApi(rsp);
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener preguntas por etiqueta", error);
                setLoading(false);
            }
        }; cargarPreguntasPorEtiqueta();
    }, []);

    const anteriorTarjeta = () => {
        if (currentIndex > 0) {
            setBlurRespuesta(false);
            setCurrentIndex(currentIndex - 1);
        }
    }

    const siguienteTarjeta = () => {
        if (currentIndex < rspApi.length - 1) {
            setBlurRespuesta(false);
            setCurrentIndex(currentIndex + 1);
        }
    }

    const mostrarRespuesta = () => {
        setBlurRespuesta(prev => !prev);
    };



    if (loading === true) {
        return <div>Cargando...</div>;
    }

    const tarjetaActual = rspApi[currentIndex];
    return (
        <div className="h-fit w-11/12 border-amber-50 border-2 text-zinc-300 p-10 flex flex-col gap-10">
            <div className="border-amber-50 border-2 p-5">
                <h2>{tarjetaActual.pregunta}</h2>
            </div>
            <div className="border-amber-50 border-2 p-5 ">
                <p className={blurRespuesta ? "" : "blur-3xl"}>
                    {tarjetaActual.respuesta}
                </p>
            </div>
            <div className="border-amber-50 border-2 p-5 flex flex-col gap-5 text-center">
                <div onClick={mostrarRespuesta} className="cursor-pointer border-amber-50 border-2 p-5">
                    <span className="select-none">{blurRespuesta ? "ocultar respuesta" : "mostrarRespuesta"}</span>
                </div>
                <div className="flex justify-between gap-5">
                    <div onClick={anteriorTarjeta} className="w-full cursor-pointer  select-none border-amber-50 border-2 p-5"><span>anterior</span></div>
                    <div onClick={siguienteTarjeta} className="w-full cursor-pointer select-none  border-amber-50 border-2 p-5"><span>siguiente</span></div>
                </div>
            </div>

        </div>
    )
}
export default PreguntasEtiqueta