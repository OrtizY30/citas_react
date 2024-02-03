import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListaPacientes from "./components/ListaPacientes"

const getPacientes = JSON.parse(localStorage.getItem("pacientes")) || []

function App() {
  const [pacientes, setPacientes] = useState(getPacientes)
  const [paciente, setPaciente] = useState({})


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes]);

  const eliminarPaciente = id => {
    const pacientesActualizado = pacientes.filter(paciente => paciente.id != id);

    // Se puede hacer de las 2 maneras
    setPacientes(pacientesActualizado)
    // setPacientes(pacientes.filter( paciente => paciente.id != id));
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex w-full" >

        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

        <ListaPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente} />
      </div>
    </div>
  )
}

export default App
