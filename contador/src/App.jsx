
import { useState } from 'react'
import { Boton } from './components/Boton'
import { Pantalla } from './components/Pantalla'
import './App.css'


export const App = () => {

const [valor, setValor] = useState(0)


  const hacerClick = () => {
    setValor(valor+1)
  }
  
  const limpiar = () => {
    setValor(0)
  }

  return (
    <div className='App'>
      <Pantalla var1={valor}/>
      <Boton texto='Click' funcion={hacerClick} maneejarTipoBtn={true}/>
      <Boton texto='Reinciar' funcion={limpiar} manejarTipoBtn={false}/>
    </div>
  )
  
  

}
