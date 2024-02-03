import React from 'react'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente
  
  const handleEliminar = () => {
    const respuesta = confirm("¿Deseas eliminar el paciente?");

    if(respuesta){
      eliminarPaciente(id)
    }
  };
  
  return (
    <div className='ml-5 mb-5 bg-white shadow-md px-5 py-10  rounded-xl'>

      <p className='text-gray-700 mb-3 font-bold uppercase'>
        Mascota: <span className='capitalize font-normal'>{nombre}</span>

      </p>
      <p className='text-gray-700 mb-3 font-bold uppercase'>
        Propietario: <span className='capitalize font-normal'>{propietario} </span>

      </p>

      <p className='text-gray-700 mb-3 font-bold uppercase'>
        Email: <span className='font-normal normal-case'> {email}</span>

      </p>

      <p className='text-gray-700 mb-3 font-bold uppercase'>
        fecha Alta: <span className='font-normal normal-case'>{fecha}</span>

      </p>

      <p className='text-gray-700 mb-3 font-bold uppercase'>
        Síntomas: <span className='font-normal capitalize'> {sintomas}</span>

      </p>
      <div className='flex justify-between mt-8'>


        <button
          type='button'
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md uppercase'
          onClick={() => setPaciente(paciente)}>
Editar
        </button>
        <button
          type='button'
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md uppercase'
          onClick={handleEliminar} >
Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente
