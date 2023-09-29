import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.date} />
        </li>
        <li className="text-capitalize">{props.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.icon}
              alt={props.description}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.humidity}%</li>
            <li>Wind: {props.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
