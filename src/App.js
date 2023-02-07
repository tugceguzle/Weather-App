import React from "react";
import Content from "./components/Content";
import { WeatherProvider } from "./context/WeatherContext";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Content />
      </WeatherProvider>
    </div>
  );
}

export default App;
