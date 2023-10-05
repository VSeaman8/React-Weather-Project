import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  console.log(props);
  return (
    <div className="WeatherInfo">
      <h1> {props.info.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon
                code={props.info.icon}
                size={52}
                alt={props.info.description}
              />
            </div>

            <div className="float-left">
              <span className="temperature">
                {Math.round(props.info.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
