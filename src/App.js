import React from "react";
import "./App.css";
import Weather from "./Weather";

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
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
