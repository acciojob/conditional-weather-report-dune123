import React from 'react'
import { GoDotFill } from "react-icons/go";

const WeatherDisplay = ({weatherData}) => {
  return (
    <div>
        {
            weatherData.map((data,index)=>(
                <div key={index} style={{display:"flex",alignItems:"center",gap:"2vw"}}>
                    <h3>Conditions: {data.conditions}</h3>
                    <h3>Temperature: <GoDotFill style={{ color: data.temperature > 20 ? "red" : "blue" }} /></h3> 
                    </div>
            ))
        }
    </div>
  )
}

export default WeatherDisplay