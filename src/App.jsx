import React from "react";
import Weather from "./components/Weather";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Weather App</title>
        <meta
          name="description"
          content="Check current weather conditions in your city with Weather App."
        />
      </Helmet>
      <Weather />
    </div>
  );
}

export default App;
