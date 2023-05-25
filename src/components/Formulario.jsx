import {useState, useEffect} from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);
    
    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //validacion del formulario
        if ([nombre, propietario, telefono, fecha, hora, sintomas].includes('')) 
        {
            setError(true);
            return;
        }
        
            setError(false);

            //COnstruir el objeto del paciente
            const objetoPaciente = {
                nombre,
                propietario,
                telefono,
                fecha,
                hora,
                sintomas,
                
            }


            if (paciente.id) 
            {
                //Editando el registro
                objetoPaciente.id = paciente.id;

                const pacientesActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

                setPacientes(pacientesActualizado);
                setPaciente({});


            }
            else
            {
                //Nuevo registro
                objetoPaciente.id = generarId();
                setPacientes([...pacientes, objetoPaciente]);

            }

            

            //Reiniciar el formulario al enviar los datos
            setNombre('');
            setPropietario('');
            setTelefono('');
            setFecha('');
            setHora('');
            setSintomas('');
        
    }

    //hacer desaparecer el mensaje luego de 3 segundos
    useEffect(() => {
        let tiempo;
        if (error) {
            tiempo = setTimeout(() => {
            setError(false);
          }, 3000);
        }
        return () => clearTimeout(tiempo);
      }, [error]);

      //llaer los datos del paciente al formulario para editar
    useEffect(() => {
      
    if (Object.keys(paciente).length > 0) {
        setNombre(paciente.nombre);
        setPropietario(paciente.propietario);
        setTelefono(paciente.telefono);
        setFecha(paciente.fecha);
        setHora(paciente.hora);
        setSintomas(paciente.sintomas);
    }
      
    }, [paciente])
    

  return (
    <div className='md:w-1/2 lg:w-2/4'>
        <h2 className='font-black font-serif text-5xl text-center text-orange-800 mb-4'>Monitoreo de Pacientes</h2>

        

        <form 
            className='bg-orange-100 p-6 rounded-lg shadow-md ml-2 mb-8' style={{ backgroundImage: "url('./public/fondoform.jpg')", backgroundSize: "cover"}}
            onSubmit={handleSubmit}
        >
            {error && <Error>Todos los campos son obligatorios</Error>}
                    
            <p className='text-3xl font-semibold font-serif mt-5 text-sky-900 mb-10 text-center '>Agregar Pacientes y gestionarlos</p>

            <div className='mb-4'>
                <label htmlFor="nombre-mascota" className='block text-cyan-800 font-bold mb-2'>
                Nombre de la Mascota
                </label>
                <input 
                className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                id='nombre-mascota'
                type='text' 
                placeholder='Nombre del Animalito'
                value={nombre}
                onChange={ (e) => setNombre(e.target.value) }
                />
            </div>

            <div className='mb-4'>
                <label className='block text-cyan-800 font-bold mb-2' htmlFor='nombre-propietario'>
                Nombre del Dueño
                </label>
                <input 
                className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                id='nombre-propietario'
                type='text' 
                placeholder='Nombre del Dueño'
                value={propietario}
                onChange={ (e) => setPropietario(e.target.value) }
                />
            </div>

            <div className='mb-4'>
                <label className='block text-cyan-800 font-bold mb-2' htmlFor='telefono'>
                Teléfono o Celular
                </label>
                <input 
                className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                id='telefono'
                type='number' 
                placeholder='Teléfono o Celular del Propietario'
                value={telefono}
                onChange={ (e) => setTelefono(e.target.value) }
                />
            </div>

            <div className='mb-4'>
                <label className='block text-cyan-800 font-bold mb-2' htmlFor='fechaalta'>
                Fecha de Alta
                </label>
                <input 
                className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                id='fechaalta'
                type='date' 
                placeholder='Fecha de Alta de la Mascota'
                value={fecha}
                onChange={ (e) => setFecha(e.target.value) }
                />
            </div>

            <div className='mb-4'>
                <label className='block text-cyan-800 font-bold mb-2' htmlFor='horaalta'>
                Hora de Alta
                </label>
                <input 
                className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                id='horaalta'
                type='time' 
                placeholder='Hora de Alta de la Mascota'
                value={hora}
                onChange={ (e) => setHora(e.target.value) }
                />
            </div>

            <div className='mb-4'>
                <label className='block text-cyan-800 font-bold mb-2' htmlFor='sintomas'>
                Síntomas
                </label>
                <textarea
                    id='sintomas'
                    className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder='Descripción de los sintomas'
                    value={sintomas}
                    onChange={ (e) => setSintomas(e.target.value) }
                />
            </div>

            <input 
                type="submit" 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full md:w-1/2 rounded-2xl uppercase hover:cursor-pointer ml-40' 
                value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
            />

        </form>
    </div>
  )
}

export default Formulario;