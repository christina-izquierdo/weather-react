import React from "react";
import "./styles.css";
import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
     <div className="container">
      <Weather defaultCity="Dallas"/>
    
      <footer className="source-code-link">
        This project was coded by Christina Izquierdo and is open-sourced on <a href="https://github.com/christina-izquierdo"> Github</a>.
      </footer>
    </div>
    </div>
  );
}

export default App;
