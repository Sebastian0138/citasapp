import React from 'react'
import { useState,useEffect } from 'react';
import Paciente from './Paciente';
import Error  from './Error'

const Formulario = ({setPacientes, pacientes,paciente,setPaciente}) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
        if(pacientes.length>0){
            
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
            setNombre(paciente.nombre);
        }
      
    }, [paciente])
    

    const generarId=()=>{

        const ramdom=Math.random().toString(36).substring(2)
        const fecha =Date.now().toString(36)
        return ramdom+fecha;
    }

const handleSubmit=(e)=>{
    e.preventDefault();
    if([propietario,email,fecha,sintomas].includes('')){

        console.log("Hay un campo vacio");
        setError(true);
        return;
    }
    setError(false)


    const objetoPaciente={
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        
    }
    if(paciente.id){
//editar paciente
        objetoPaciente.id=paciente.id
        const pacientesActualizados=pacientes.map(pacienteState => pacienteState.id===paciente.id? objetoPaciente:pacienteState)
        setPacientes(pacientesActualizados);
        setPaciente({})
    }else{
//nuevo registro

objetoPaciente.id=generarId()
setPacientes([...pacientes,objetoPaciente])

    }



    

    //reset form
    setNombre('');
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
}

  return (<>
  
    <div className='md:w-1/2 lg:w-2/5'>
    <h2 className='font-black text-3xl text-center'>Seguimientos Pacientes</h2>  
    <p className='mt-5 text-lg text-center mb-10'>Añade Pacientes
            <span className='text-indigo-600 font-bold'> Administralos</span>
        </p>

        <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5' action="">
         {error && <Error mensaje={"Todos los campos son obligatorios"}/>}
            
            <div className='mb-5'>
                <label className='block text-gray-700 font-bold uppercase' htmlFor="mascota">Nombre Paciente</label>
                <input id='propietario' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text"  placeholder='Nombre Propietario'
                value={propietario} onChange={(e)=>setPropietario(e.target.value)}
                
                />
            </div>

            <div className='mb-5'>
                <label className='block text-gray-700 font-bold uppercase' htmlFor="email">Email Contacto </label>
                <input id='email' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="email"  placeholder='Email@gmail.com'
                value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className='mb-5'>
                <label className='block text-gray-700 font-bold uppercase' htmlFor="alta">Alta</label>
                <input id='alta' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="date"
                value={fecha} onChange={(e)=>setFecha(e.target.value)}  />
            </div>

            <div className='mb-5'>
                <label className='block text-gray-700 font-bold uppercase' htmlFor="sintomas">Sintomas</label>
                <textarea id='sintomas' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Describe los Sintomas'
                value={sintomas} onChange={(e)=>setSintomas(e.target.value)}></textarea>
            </div>

            <input type="submit" className='bg-indigo-600 w-full p-3 text-white rounded-md  font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-color' 
            value={paciente.id ? 'Editar paciente' : 'Agregar paciente'} />

        </form>
    </div>
  </>
  )
}

export default Formulario
