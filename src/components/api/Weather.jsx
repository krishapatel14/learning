import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const Weather = () => {
    const [weather, setWeather] = useState('');
    // const [city, setCity] = useState('Mumbai');

    const getWeather = async (city) => {
        const res = await axios.get(`https://forecast9.p.rapidapi.com/rapidapi/forecast/${city}/summary/`,
            {
                headers:{
                    "X-RapidAPI-Key":"2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6",
                    "X-RapidAPI-Host": "forecast9.p.rapidapi.com",
                }
            }
        );
        setWeather(res.data)
        console.log(res.data);

    }
    useEffect(() => {
     getWeather('Berlin')
    }, [])
   
    return (
        <div>
            <h1>{weather.items[0].date}</h1>
        </div>
  
)

}


   
