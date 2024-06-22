import React, { useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";
import drizzle_icon from "../assets/drizzle.png";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const preloadImage = (url) => {
    const img = new Image();
    img.src = url;
  };

  const search = async (city) => {
    if (city === "") {
      alert("Please enter a city name to search for the weather.");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
      }

      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error fetching weather data", error);
    }
  };

  useEffect(() => {
    preloadImage("/assets/cloud.png");
    preloadImage('/assets/clear.png');
    preloadImage('/assets/rain.png');
    preloadImage('/assets/snow.png');
    preloadImage('/assets/wind.png');
    preloadImage('/assets/humidity.png');
    preloadImage('/assets/drizzle.png');

    search("Colombo");
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Weather App</title>
        <meta
          name="description"
          content="Check the current weather of any city."
        />
        <link rel="preconnect" href="https://api.openweathermap.org" />
      </Helmet>
      <main className="weather">
        <header className="search-bar">
          <input ref={inputRef} type="text" placeholder="Search" />
          <img
            src={search_icon}
            alt="Search"
            onClick={() => search(inputRef.current.value)}
          />
        </header>
        {weatherData ? (
          <>
            <img
              src={weatherData.icon}
              alt="Weather Icon"
              className="weather-icon"
            />
            <p className="temperature">{weatherData.temperature}°C</p>
            <p className="location">{weatherData.location}</p>

            <section className="weather-data">
              <div className="col">
                <img src={humidity_icon} alt="Humidity Icon" />
                <div>
                  <p>{weatherData.humidity} %</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind_icon} alt="Wind Speed Icon" />
                <div>
                  <p>{weatherData.windSpeed} Km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </section>
          </>
        ) : (
          <p>No weather data available</p>
        )}
      </main>
    </HelmetProvider>
  );
};

export default Weather;
