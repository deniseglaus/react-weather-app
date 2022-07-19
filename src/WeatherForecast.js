import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "47b212bac8b31fde67977395522092e6";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=£${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Tue </div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19°</span>{" "}
            <span className="WeatherForecast-temp-min">10°</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
