import React, {useState } from "react";
import "./styles.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
  const [city, setCity]= useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ready:false});
  function handleResponse(response){
    setWeatherData({
      ready:true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,

    });
  
} 
function search(){
  const apiKey="a4014b11c8762becff1e993255c8c37e";
  let apiUrl =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
function handleSubmit(event){
  event.preventDefault();
  search();
}
function handleCityChange(event){
  setCity(event.target.value);
}
if(weatherData.ready){
  return (
    <div>
  

        <div class="container-fluid city-search" >
          <form onSubmit={handleSubmit}>
            <div class="input-group mb-3">
              <input
                type="search"
                class="form-control"
                id="search-form"
                placeholder="Search Location"
                aria-label="Search"
                aria-describedby="button-addon2"
                onChange={handleCityChange}
              ></input>
              <button
                class="btn btn-outline-secondary"
                type="submit"
                id="button"
              >
                Update City
              </button>
            </div>
          </form>
        
        </div>
  
    
    <WeatherInfo data={weatherData}/>
    </div>
  );  
 } else {
  search();
  return "loading";
  };
}
