import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
    function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }
    function day(){
        let date = new Date(props.data.dt * 1000);
        let day= date.getDay();

        let days =["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

        return days[day];
    }
    return (
    <div> 
        <div className="WeatherForecast-day">{day()}</div>
        <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">{maxTemperature()}°/</span>
        <span className="WeatherForecast-temperature-min">{minTemperature()}°</span> 
        </div>
        <WeatherIcon code={props.data[0].weather[0].icon} />
    
    </div>
    );
}