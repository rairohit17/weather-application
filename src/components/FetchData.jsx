import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { weatherState,locationState,valuesState,placeState } from '../state/atom'
import axios from 'axios'


const FetchData = () => {
    const [weather,setWeather]= useRecoilState(weatherState)
    const [location,setLocation]= useRecoilState
    (locationState)
    const [values,setValues]= useRecoilState(valuesState)
    
    const place= useRecoilValue(placeState)
    const fetchWeather=async()=>{
        const options={
            method:"GET",
            url:"https://visual-crossing-weather.p.rapidapi.com/forecast",
            params: {
                aggregateHours:'24',
                location:place,
                contentType:"json",
                unitGroup:'metric',
                setColumnNames:0,
            },
            headers:{
                'X-RapidAPI-Key':import.meta.env.VITE_API_KEY,
                "X-RapidAPI-Host":"visual-crossing-weather.p.rapidapi.com"
            }
        }
        try {
            const response= await axios.request(options)
            console.log(response.data)
            const thisData= Object.values(response.data.locations)[0]
            setLocation(thisData.address);
            setValues(thisData.values)
            setWeather(thisData.values[0]);
            



        }
        catch(e){
            console.error(e)
        }


    }
    useEffect(()=>{
        fetchWeather()
    },[place])
    useEffect(()=>{
        console.log(values)
    },[values])
    
  return (
    <div></div>
  )
}

export default FetchData