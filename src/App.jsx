import { useState } from 'react'

import Navbar from './components/Navbar'
import FetchData from './components/FetchData'
import { RecoilRoot } from 'recoil'
import BackgroundLayout from './components/BackgroundLayout'

function App() {
 

  return (
    <RecoilRoot>
       <div className=' w-full h-screen text-white px-8' >
      <Navbar></Navbar>
      <FetchData></FetchData>
      <BackgroundLayout></BackgroundLayout>
      
    </div>
    </RecoilRoot>
   
  )
}

export default App
