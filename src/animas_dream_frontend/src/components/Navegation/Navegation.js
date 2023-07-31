import React from 'react'
import { useProviders } from '@connect2ic/react';



export const Navegation = ({handlelogin, isConnected, disconnect}) => {
  const [providers] = useProviders();


  return (
    <div className='p-2'>
      {
        isConnected ? <button className='border-white border-[2px] shadow-inner py-2 px-4 text-sm rounded-xl' onClick={() => disconnect()}>Logout</button> : <button className=' border-wite border-[2px] shadow-inner py-2 px-4 text-sm rounded-xl' onClick={handlelogin}>Login</button>
      } 
    </div>
  )
}
