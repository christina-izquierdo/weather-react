import React from "react";
import "./styles.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Forecast(){
    return(
        <div className="forecast">
            <div className="container">
                <div className="row">
                <div className="col">
                    <h5>Monday</h5>
                    <p>22/17</p>
                    <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#7fdfd4"
        size={48}
        animate={false}
      />
      </div>
      <div className="col">
                    <h5>Tuesday</h5>
                    <p>22/17</p>
                    <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#7fdfd4"
        size={48}
        animate={false}
      />
      </div>
      <div className="col">
                    <h5>Wednesday</h5>
                    <p>22/17</p>
                    <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#7fdfd4"
        size={48}
        animate={false}
      />
      </div>
      <div className="col">
                    <h5>Thurs</h5>
                    <p>22/17</p>
                    <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#7fdfd4"
        size={48}
        animate={false}
      />
      </div>
      <div className="col">
                    <h5>Friday</h5>
                    <p>22/17</p>
                    <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#7fdfd4"
        size={48}
        animate={false}
      />

                </div>
                </div>
            </div>

        </div>
    );
}