import React, { useEffect, useState } from 'react'
import { CardPerfil } from './components/CardPerfil/CardPerfil'
import { Navegation } from './components/Navegation/Navegation'
import { Principal } from '@dfinity/principal';
import { useConnect, useProviders } from '@connect2ic/react'
import { animas_dream_backend } from "../../declarations/animas_dream_backend";
/* import { WorldCoin } from './components/WorldCoin/WorldCoin';
 */


export const App = () => {
  const [account, setAccount] = useState();

  const {principal, isConnected, activeProvider, connect, disconnect} = useConnect();
  const [providers] = useProviders();

  const handlelogin = async () => {
    connect(providers.meta.id);
    islogueo();
  }

  const islogueo = async () => {
    if(isConnected){
      const res = await animas_dream_backend._login(Principal.fromText(principal));
      console.log(res.ok)
      if(res.ok === "Verificado"){
        const account = await animas_dream_backend._perfile(Principal.fromText(principal));
        console.log(account.ok);
      }
    }
  }

  useEffect(() => {
    islogueo()
  }, [isConnected])
 

  return (
    <div className=' h-screen'>
      <div className='h-[10%]'>
       <Navegation handlelogin={handlelogin} disconnect={disconnect} isConnected={isConnected}/>
      </div>
    <div className='flex items-center justify-center w-full h-[90%]'>
      <CardPerfil principal={principal} isConnected={isConnected}/>
      {/* <WorldCoin/> */}
    </div>
    </div>
  )
}
