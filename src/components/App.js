
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const arr = [
  { temperature: 25, conditions: 'Sunny' },
  { temperature: 18, conditions: 'Cloudy' },
  { temperature: 30, conditions: 'Hot' },
  { temperature: 15, conditions: 'Rainy' },
  { temperature: 22, conditions: 'Partly Cloudy' },
  { temperature: 10, conditions: 'Snowy' },
  { temperature: 28, conditions: 'Humid' },
  { temperature: 20, conditions: 'Windy' },
  { temperature: 12, conditions: 'Foggy' },
  { temperature: 27, conditions: 'Thunderstorms' },
  { temperature: 19, conditions: 'Overcast' },
  { temperature: 24, conditions: 'Clear' },
  { temperature: 16, conditions: 'Drizzle' },
  { temperature: 14, conditions: 'Sleet' },
  { temperature: 29, conditions: 'Heatwave' },
];

const App = () => {
  const [weatherData,setWeatherData] =useState([]);

  useEffect(()=>{
    setWeatherData(arr);
  },[])
  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay weatherData={weatherData}/>
    </div>
  )
}

export default App
