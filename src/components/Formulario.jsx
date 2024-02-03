import React, { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)
  const [exito, setExito] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    } 
    
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const hadleSubmit = (e) => {
    e.preventDefault()

    // Validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true)

      setTimeout(() => {
        setError(false)
      }, 5000)

      return

    }

    setExito(true)

    setTimeout(() => {
      setExito(false)
    }, 5000);


    // Objeto pasiente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if (paciente.id) {
      //  Editando el registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ?objetoPaciente : pacienteState);

      setPacientes(pacientesActualizados);
      setPaciente({})

    } else {
      // Nuevo registro

      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente])

    }

    // Reiniciar formulario
    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y <span className='text-indigo-600 font-bold'> Administralos</span>
      </p>

      <form onSubmit={hadleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>

        {error && (
          <Error>Todos los campos son obligatorios</Error>
        )}
        {exito && (
          <div className='w-full p-3 mb-5 bg-green-500 rounded-md text-center font-bold uppercase text-white'>
            <p>{paciente.id ? 'Paciente Actualizado correctamente' : 'Paciente agregado correctamente'}</p>
          </div>
        )}

        <div className='mb-5'>
          <label htmlFor="mascota"
            className='block text-gray-700 uppercase font-bold'
          >
            Nombre Mascotas
          </label>

          <input
            id='mascota'
            type="text"
            placeholder='Nombre de la Mascota'
            className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label htmlFor="propietario"
            className='block text-gray-700 uppercase font-bold'
          >
            Nombre Propietario
          </label>

          <input
            id='propietario'
            type="text"
            placeholder='Nombre del Propietario'
            className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label htmlFor="email"
            className='block text-gray-700 uppercase font-bold'
          >
            Email
          </label>

          <input
            id='email'
            type="email"
            placeholder='Nombre del Propietario'
            className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label htmlFor="alta"
            className='block text-gray-700 uppercase font-bold'
          >
            Alta
          </label>

          <input
            id='alta'
            type="date"
            className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label htmlFor="sintomas"
            className='block text-gray-700 uppercase font-bold'
          >
            Síntomas
          </label>

          <textarea
            id="sintomas"
            placeholder='Describe los Síntomas'
            className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md cursor-pointer hover:bg-indigo-700 transition-all'
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"} />

      </form>

    </div>
  )
}

export default Formulario
