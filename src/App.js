import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather />
        <footer>
          This project was cofed by Vicki Seaman and is {""}
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
