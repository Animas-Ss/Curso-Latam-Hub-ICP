import React from 'react'
import { CardPerfil } from './components/CardPerfil'
import  {Lista}  from './components/ejemplo'

export const App = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <CardPerfil/>
      <Lista />
    </div>
  )
}
