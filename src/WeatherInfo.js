import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from 'react-animated-weather';
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            <WeatherIcon code={props.data.icon} />
            <img
              class="current-img"
              id="icon"
              src={props.data.icon}
              width="65"
            />
            <WeatherTemperature celsius={props.data.temperature} />
              <br />
              <h2>
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
    );
}