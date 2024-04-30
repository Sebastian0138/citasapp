import React from 'react'

const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {

const handleDelete=()=>{

const respuesta = confirm('Desea eliminar este paciente');
if(respuesta){

    eliminarPaciente(paciente.id);
}

}
  return (
 
   
    <div className='mx-5 bg-white shadow-md px-5 py-10 rounded-xl'>
        
        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:
            <span className='font-normal normal-case '>{paciente.propietario}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Email:
            <span className='font-normal normal-case '>{paciente.email}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha alta:
            <span className='font-normal normal-case '>{paciente.fecha}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas:
            <span className='font-normal normal-case '>{paciente.sintomas}</span>
        </p>

        <div className='flex justify-between'>
            <button onClick={()=>setPaciente(paciente)} type='button' className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold text-white uppercase '>
                Editar
            </button>

            <button onClick={handleDelete} type='button' className='py-2 px-10 bg-red-600 hover:bg-red-700 rounded-lg font-bold text-white uppercase ' >
                Eliminar
            </button>
        </div>
    </div>



        
  )
}

export default Paciente
