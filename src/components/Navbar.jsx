import React from 'react'
import { useState } from 'react'

import searchImage from '../assets/icons/search.svg'

const Navbar = () => {
    const [input, setInput] = useState("")
  return (
    <nav className=' w-full p-3 flex justify-between items-center'>
    <h1 className='font-bold tracking-wide text-3xl '> Weather Application </h1>
    <div className='bg-white w-[15rem] overflow-hidden shadow-xl rounded flex items-center p-2 gap-2 '>
      <img src={searchImage} alt="search" className=' w-[1.5rem] h-[1.5rem]' />
      <input onKeyUp={(e)=>{
        if ( e.key==='Enter'){

          // submit the form  logic 
        }
      }} type="text" className='focus:outline-none w-full text-[#212121] text-lg' value={input } /*rememner why value prop is used */onChange={(e)=>{setInput(e.target.value)}} />
    </div>
    

  </nav>
  )
}

export default Navbar