import React from "react";
import "./styles.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather() {
  return (
    <div className="Weather">
      <div className="current-city">
        <h1>Melbourne</h1>
        <h3 class="current-date">Thursday</h3>
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
        color="black"
        size={48}
        animate={false}
      />
          <h2>
            <span class="current-temp" id="temperature">
              15°
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
            <span class="current-weather-description" id="weather-description">
              Cloudy
            </span>
            <br />
            <div class="humidity-wind">
              Humidity
              <span class="current-humidity" id="humidity">
                {" "}
                50{" "}
              </span>{" "}
              % <br />
              Wind:
              <span class="current-wind" id="wind">
                {" "}
                6
              </span>{" "}
              km/h
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}
