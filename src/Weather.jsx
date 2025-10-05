import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import "./Weather.css"

function Weather() {
    const [city, setcity] = useState('')
    const [data, setdata] = useState({
        name: "London",
        humidity: '55',
        wind: '44',
        temp:'16.05',
        description:'broken clouds'
    })
  
    const handleclick = () =>{
        const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c1d23386219a753034d96abb8b39cd1&units=metric`;

        fetch(apiurl)
       .then(response => {
    
      return response.json();
    })
    .then(data => {
      setdata({
        name: data.name,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        temp: data.main.temp,
        description:data.weather[0].description
      });
    })
    
}
  
       
  
  return (
    <>
        <div className='container'>
        <div className='search'>
            <input className='city' placeholder='Enter the city name' value={city} onChange={(e) => setcity(e.target.value)}></input>
            <p className='icon' onClick={handleclick}><FaSearch /></p>

        </div>


        <img className='imag' src='https://cdn-icons-png.flaticon.com/512/7133/7133364.png'></img>
        <h1>{data.temp}°C</h1>
        <h2>{data.name}</h2>
         <div className='description'>
            <p>{data.description}</p>
        </div>


        <div className='details'>

            <div className='humidity'>
            <img className='imag1' src='https://cdn0.iconfinder.com/data/icons/weather-forecast-18/40/Precipitation_Humidity_Waves_Water_Weather_Forecast-512.png'></img>
            <div className='humidity_data'>
                <p>Humidity</p>
            <p>{data.humidity}%</p>
            </div>
        </div>

        <div className='wind'>
        <img  className='imag1' src='https://cdn1.iconfinder.com/data/icons/hawcons/32/699847-icon-43-wind-512.png'></img>
            <div>
                <p>Wind</p>
            <p>{data.wind}m/s</p>
            </div>
        </div>

        </div>

       

        </div>
    </>
  )
}

export default Weather