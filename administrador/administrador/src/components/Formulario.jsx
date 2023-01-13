import React, {useState} from 'react'

export const Formulario = ({setAlumnos}) => {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [grupo, setGrupo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [fecha, setFecha] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [error,setError]= useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();
      if ([nombre,correo,grupo,carrera,fecha,observaciones].includes('')){
        console.log('Algun campo tiene una cadena vacia');
        setError(true);
        return;
      }
      setError(false);
      const objetoEstudiante ={
          nombre,
          correo,
          grupo,
          carrera,
          fecha,
          observaciones
        }
        setAlumnos(objetoEstudiante);
        limpiarCampos();
    } 

    const limpiarCampos = () =>{
      setNombre('');
      setCorreo('');
      setGrupo('');
      setCarrera('');
      setFecha('');
      setObservaciones('');
    }

    

  return (
    <div className=' md:w-1/2 lg: w-2/5 bg-orange-500'  >
        <h2 className=' font-black text-2xl text-center'> Seguimiento estudiantes </h2>
        <p className=' text-sm py-5  px-1 text-center mb-6'>Agregar estudiantes <span className=' text-center'> y administralos</span></p>

        <form className='bg-white shadow-md rounded-lg py-10 px-3'
          onSubmit={handleSubmit}
        >
          {
              error &&(
                <div className=' bg-red-200 rounded-md  text-rose-700 p-5 text-center'>
                    <p> Hay un error - Uno de los campos tiene una cadena vacia</p>
                </div>
              )
          }
          <div className='mb-3' >
            <label htmlFor='nombre' className='block uppercase'> Nombre estudiante:</label>
            <input 
                id='nombre'
                type="text" 
                placeholder='Ingresa el nombre' 
                className=' border-2 w-full p-2  placeholder-zinc-500 rounded-md '
                value={nombre}
                onChange={(e)=> setNombre(e.target.value) }
            ></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='correo' className='block uppercase'> Correo: </label>
            <input 
                id='correo'
                type="email" 
                placeholder='Ingresa el correo'
                className=' border-2 w-full p-2  placeholder-zinc-500 rounded-md '
                value={correo}
                onChange={(e)=> setCorreo(e.target.value) }
            ></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='grupo' className='block uppercase'> Grupo: </label>
            <input 
                id='grupo'
                type="text" 
                placeholder='Ingresa el grupo' 
                className=' border-2 w-full p-2  placeholder-zinc-500 rounded-md '
                value={grupo}
                onChange={(e)=> setGrupo(e.target.value) }
            ></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='carrera' className='block uppercase'> Carrera: </label>
            <input 
                id='carrera'
                type="texto" 
                placeholder='Ingresa la carrera' 
                className=' border-2 w-full p-2  placeholder-zinc-500 rounded-md '
                value={carrera}
                onChange={(e)=> setCarrera(e.target.value) }
            ></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='fecha' className='block uppercase'> Fecha: </label>
            <input 
                id='fecha'
                type="date" 
                placeholder='Ingresa la carrera' 
                className=' border-2 w-full p-2  placeholder-zinc-500 rounded-md '
                value={fecha}
                onChange={(e)=> setFecha(e.target.value) }
            ></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='observaciones' className='block uppercase  placeholder-gray-400 rounded-r-md w-full'> Observaciones: </label>
            <textarea id='observaciones' placeholder='Ingresa las observaciones'
            value={observaciones}
            onChange={(e)=> setObservaciones(e.target.value) }
            />
          </div>
        <input 
        type='submit' 
        className=' uppercase bg-sky-600 w-full p-2 text-white hover:bg-blue-700'
        value="Registrar cita"
        />
        </form>
    </div>
  )
}
