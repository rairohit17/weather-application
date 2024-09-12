import { useState } from 'react'

import Navbar from './components/Navbar'
import FetchData from './components/FetchData'
import { RecoilRoot, useRecoilValue } from 'recoil'
import BackgroundLayout from './components/BackgroundLayout'
import WeatherCard from './components/WeatherCard'
import { locationState, placeState, valuesState, weatherState } from './state/atom'
import MiniCard from './components/MiniCard'

function App() {
  const location=useRecoilValue(locationState)
  const weather=useRecoilValue(weatherState)
  const values= useRecoilValue(valuesState)
  const place=useRecoilValue(placeState)
 

  return (
    
       <div className=' w-full h-screen text-white px-8' >
      <Navbar></Navbar>
      <FetchData></FetchData>
      
      <BackgroundLayout></BackgroundLayout>
      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center  justify-center '>
      <WeatherCard
      place={location}
      windspeed={weather.wspd}
      humidity={weather.humidity}
      temperature= {weather.temp}
      heatIndex={weather.heatindex}
      iconString={weather.conditions}
      conditions={weather.conditions}
      />
      <div className='flex justify-center gap-8  flex-wrap w-[60%] '>
        {
          values?.slice(1,7).map(cur=>{
            return (
              <MiniCard 
            key={cur.datetime}
            time={cur.datetime}
            temp={cur.temp}
            iconString={cur.conditions}
            />
            )
            
          })
        }
      </div>
      </main>

    </div>

   
   
  )
}

export default App
