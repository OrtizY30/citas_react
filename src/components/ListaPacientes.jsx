import React from 'react'
import Paciente from './Paciente'

const ListaPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {


  return (

    <div className='md:w-1/2 lg:w-3/5 mb-10 md:h-screen overflow-y-auto '>

      { pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center '>Listado pacientes</h2>

          <p className='mt-5 text-center text-xl mb-10'>
            Administra tus <span className='text-indigo-600 font-bold  '> Pacientes y Citas</span>
          </p>
          <div className='md:h-screen overflow-y-hidden w-full'>

            {pacientes.map(paciente => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente} />
            ))}
          </div>

        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center '>No hay pacientes</h2>

          <p className='mt-5 text-center text-xl mb-10'>
          Comienza agregando pacientes <span className='text-indigo-600 font-bold  '>y aparecerán en este lugar</span>
          </p>
        </>
      )}


    </div>
  )
}

export default ListaPacientes
