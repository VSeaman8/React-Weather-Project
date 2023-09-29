import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "ce2oeab4ba6tb6eca22df349f6a0bf31";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.daily.temperature.day,
      description: response.daily.condition.description,
      humidity: response.daily.temperature.humidity,
      wind: response.daily.wind.speed,
      city: response.city,
      icon: response.daily.condition.icon,
      date: new Date(response.daily.time * 1000),
    });

    function handleSubmit(event) {
      event.preventDefault();
    }

    function handleCityChange(event) {
      setCity(event.target.value);
      search(city);
    }

    if (weatherData.ready) {
      return (
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a City..."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <WeatherInfo info={weatherData} />
        </div>
      );
    } else {
      search();
      return "loading...";
    }
  }
}
