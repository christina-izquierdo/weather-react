import React, {useState, useEffect} from "react";
import "./styles.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() =>{
    setLoaded(false);
  },[props.coordinates]);

  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return(
        <div className="forecast">
            <div className="container">
                <div className="row">
                  {forecast.map(function (dailyForecast, index){
                  if (index < 6){
                    return (
                    <div className="col-sm-2">
                      <WeatherForecastDay data={dailyForecast} />
                    </div>
                   );
                  } else {
                    return null;
                  }
                  })}
                </div>
            </div>
        </div>
    );
  }else{
    let apiKey= "a4014b11c8762becff1e993255c8c37e";
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      
    axios.get(apiUrl).then(handleResponse);
    return "null";
    
};
}