import React from 'react'
import { CardPerfil } from './components/CardPerfil/CardPerfil'
import { Navegation } from './components/Navegation/Navegation'


export const App = () => {
  return (
    <div className=' h-screen'>
      <div className='h-[10%]'>
       <Navegation/>
      </div>
    <div className='flex items-center justify-center w-full h-[90%] bg-slate-600 '>
      <CardPerfil/>
    </div>
    </div>
  )
}
