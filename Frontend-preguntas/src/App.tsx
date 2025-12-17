import Buscador from './component/buscador'
import Tarjeta from './component/Tarjeta'
import './style/index.css'

function App() {
  const nombre = "Angular"
  const imagen = "/angular_gradient.png"

  return (
    <div className='bg-black w-full h-dvh flex justify-center items-center gap-3 flex-col'>
      <Buscador></Buscador>
      <Tarjeta nombre={nombre} imagen={imagen} />
      <Tarjeta nombre={nombre} imagen={imagen} />
    </div>
  )
}

export default App