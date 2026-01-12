import Buscador from './component/buscador'
import Tarjeta from './component/Tarjeta'
import './style/index.css'

function App() {

  return (
    <div className='bg-black w-full h-dvh flex justify-center items-center gap-3 flex-col'>

      <Buscador></Buscador>
      <Tarjeta />
    </div>
  )
}

export default App