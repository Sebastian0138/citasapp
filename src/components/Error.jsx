import React from 'react'

const Error = ({mensaje}) => {
  return (
    
      <div className='bg-red-800 text-white text-center p-3 rounded-lg uppercase font-bold'>
                <p>{mensaje}</p>
            </div>
    
  )
}

export default Error
