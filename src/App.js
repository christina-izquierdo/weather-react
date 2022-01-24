import React from "react";
import "./styles.css";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast"
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="App">
      <Search />
      <Weather />
      <Forecast />
    </div>
    </div>
  );
}

export default App;
