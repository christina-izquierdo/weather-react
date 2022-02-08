import React from "react";
import "./styles.css";
import Weather from "./Weather";
import Forecast from "./Forecast"
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="container">
      <Weather defaultCity="Dallas"/>
      <Forecast />
      <footer>
        This project was coded by Christina Izquierdo and is open-sourced on 
      </footer>
    </div>
    </div>
  );
}

export default App;
