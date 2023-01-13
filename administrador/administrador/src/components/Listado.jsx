import React from 'react'
import { Estudiante } from './Estudiante'


export const Listado = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen bg-lime-400 h-screen overflow-y-scroll '>
        <h2 className=' font-black text-2xl text-center'> Listado </h2>
        <p className=' text-sm py-5  px-1 text-center mb-6'>Administra tus <span className=' text-center '> citas</span></p>
        <Estudiante/>
        <Estudiante/>
        <Estudiante/>
        <Estudiante/>
        <Estudiante/>

    </div>
  )
}
