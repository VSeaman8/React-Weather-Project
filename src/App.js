import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Birmingham" />

        <footer>
          This project was coded by Vicki Seaman and is {""}
          <a
            href="https://github.com/VSeaman8/React-Weather-Project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github{" "}
          </a>
          and hosted by{" "}
          <a href="https://www.netlify.com/" target="blank" rel="noreferrer">
            netlify.com
          </a>
        </footer>
      </div>
    </div>
  );
}
