import React, { useState } from 'react'

const Header = () => {


  return (
    <>
        <h1 className='font-black text-7xl text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-900 to-orange-500 md:w-3/4 mx-auto'>
            Seguimiento clínico de mascotas {''}
            <span className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-green-800">Veterinaria La Paz</span>
        </h1>
    </>
  )
}

export default Header