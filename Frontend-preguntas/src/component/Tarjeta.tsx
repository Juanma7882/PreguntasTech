
interface TarjetaProp {
    nombre: string;
    imagen: string;
}

export default function Tarjeta({ nombre, imagen }: TarjetaProp) {
    return (
        <>
            <div className='flex flex-col justify-center items-center bg-gray-900/50 w-50 h-60 rounded-2xl border border-gray-700 hover:border-gray-600 cursor-pointer'>
                <div className='w-40'>
                    <img className='w-full h-full' src={imagen} alt={nombre} />
                </div>
                <h2 className='text-white text-4xl'>{nombre}</h2>
            </div>

        </>
    )
}
