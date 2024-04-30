import React, { useState } from 'react'
import Paciente from "./Paciente"
const ListadoPacientes = ({pacientes, setPaciente,eliminarPaciente}) => {
 
var pacientesSta=false;
  if(pacientes.length===0){
    pacientesSta=false;
    
  }else if(pacientes.length>=1){
    pacientesSta=true;
   
  }
  return (
   <>

<div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
{pacientesSta ? <>

  <h2 className='font-black text-3xl text-center'>ListadoPacientes</h2>
<p className='text-center text-xl mt-5 mb-10 '>Administra tus {''}<span className='text-indigo-600 font-bold'>Pacientes y Citas</span></p>


    {

      pacientes.map(paciente=>{

          return(
            <div className='mb-10'>
               
              <Paciente 
               setPaciente={setPaciente}
              paciente={paciente}
              key={paciente.id}
              eliminarPaciente={eliminarPaciente}/>
            </div>
          )

      })
    }
   

</>



: <>
    <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
<p className='text-center text-xl mt-5 mb-10 '>Comienza a agregar pacientes {''}<span className='text-indigo-600 font-bold'>y apareceran aqui</span></p>




</> 


}

  
   </div>
   </>
  )
}

export default ListadoPacientes
