import "./App.css";
import React from "react";
import Weather from "./Weather";

export default App;

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
        <footer>
          This project was coded by Denise and is{" "}
          <a
            href="https://github.com/deniseglaus/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
