import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <div className="Weather">
        <div className="current-city">
          <h1>{props.data.city}</h1>  
          <h3 class="current-date">
            <FormattedDate date={props.data.date} />
          </h3>
          <br />
          <div class="current-info">
            <img
              class="current-img"
              id="icon"
              src=""
              width="65"
              alt=""
            />
            <ReactAnimatedWeather
          icon="RAIN"
          color="#7fdfd4"
          size={160}
          animate={true}
        />
            <h2>
              <span class="current-temp" id="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span class="units">
                <a href="#" id="celcius-link">
                  {" "}
                  °C{" "}
                </a>
                |
                <a href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
              <br />
              <span class="current-weather-description text-capitalize" id="weather-description">
              <h3>{props.data.description}</h3>

              </span>
              <br />
              <div class="humidity-wind">
                Humidity:
                <span class="current-humidity" id="humidity">
                  {" "}
                  {props.data.humidity}{" "}
                </span>{" "}
                % <br />
                Wind:
                <span class="current-wind" id="wind">
                  {" "}
                  {props.data.wind}
                </span>{" "}
                km/h
              </div>
            </h2>
          </div>
        </div>
      </div>
        </div>
    )
}