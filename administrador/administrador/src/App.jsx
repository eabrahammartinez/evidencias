
import React, {useState} from 'react'
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { Listado } from "./components/Listado"

const App = () => {

  const[alumnos, setAlumnos] = useState([]);

  return (
    <div className=" container mx-auto  mt-20">
      <Header/>
      <div className=" mt-10 flex">
        <Formulario
        setAlumnos={setAlumnos}/>
        <Listado/>
      </div>
    </div>
  )
}

export default App