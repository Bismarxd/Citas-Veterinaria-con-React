import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    

    const {nombre, propietario, telefono, fecha, hora, sintomas, id } = paciente;

    const handleEliminar = () => {
      Swal.fire({
        title: '¿Está seguro?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar paciente'
      }).then((result) => {
        if (result.isConfirmed) {
          eliminarPaciente(id);
        }
      });
    }

  return (
    <div className='bg-orange-200 bg-opacity-50 rounded-lg p-4 ml-4 mt-8'>
        <p className="text-xl font-black font-mono">Nombre de la Mascota: {''}
        <span className="text-gray-800 font-serif font-normal">{nombre}</span> 
        </p> 

        <p className="text-xl font-black font-mono">Nombre del Dueño: {''}
        <span className="text-gray-800 font-serif font-normal">{propietario}</span> 
        </p> 

        <p className="text-xl font-black font-mono">Telefono: {''}
        <span className="text-gray-800 font-serif font-normal">{telefono}</span> 
        </p> 

        <p className="text-xl font-black font-mono">Fecha de Alta: {''}
        <span className="text-gray-800 font-serif font-normal">{fecha}</span> 
        </p> 

        <p className="text-xl font-black font-mono">Hora de Alta: {''}
        <span className="text-gray-800 font-serif font-normal">{hora}</span> 
        </p> 

        <p className="text-xl font-black font-mono">Síntomas: {''}
        <span className="text-gray-800 font-serif font-normal">{sintomas}</span> 
        </p> 

        <div className="flex items-center mt-3">
        <button 
            type='button'
            className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-8 rounded-xl mr-2"
            onClick={ () => setPaciente(paciente)}
            >
            Editar
        </button>

        <button 
            type='button'
            className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-8 rounded-xl ml-5"
            onClick={handleEliminar}
            >Eliminar
        </button>
        </div>
        </div>
  )
}

export default Paciente