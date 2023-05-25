import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  //En la ultima version del react ya no es necesario poner un useEffect para obtener datos del LS
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});


  //Guardar en local Storage
  useEffect(() => {
    
    localStorage.setItem('pacientes', JSON.stringify(pacientes));

  }, [pacientes])
  

  const eliminarPaciente = (id) =>{
    const pacientesActualizado = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizado);
  }


  return (
    <div className="container mx-auto mt-20">
      <Header/>
      
     <div className="mt-12 md:flex">
          <Formulario
            setPacientes={setPacientes}
            pacientes={pacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            paciente={paciente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>
    
      
    </div>
  )
}

export default App
