# Weather App

A simple weather application built with React that fetches weather data using the OpenWeatherMap API.

## Features

- Search for current weather conditions in any city
- Displays temperature, humidity, and wind speed
- Shows weather icons based on current conditions

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/JalinaH/weather-app.git
    cd weather-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
    ```
    VITE_APP_ID=your_api_key_here
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

- Type the name of a city into the search bar and press enter or click the search icon to get the current weather.
- By default, the app fetches weather data for the Colombo on load.

## Project Structure

- `src/`
  - `assets/` - Contains all icon images
  - `components/` - Contains the main `Weather` component
  - `App.jsx` - Main application component
  - `main.jsx` - Application entry point
- `public/` - Contains the HTML file
- `Weather.css` - Styles for the weather component

## Screenshot

![Weather App Screenshot](screenshot.png)

## Demo

You can view the deployed application [here](https://check-city-weather0.netlify.app/).

## Dependencies

- React
- Vite
- OpenWeatherMap API
