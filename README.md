# Weather Application

A lightweight weather dashboard built with HTML, CSS, and JavaScript. This project fetches live weather data from the OpenWeatherMap API and displays current conditions, temperature, wind, humidity, visibility, pressure, and sunrise/sunset times.

## Features

- Search weather by city name
- Displays city, country, condition, temperature, humidity, wind speed and direction
- Shows daily high/low temperature range
- Displays sunrise and sunset times
- Responsive card-based layout with modern weather UI styling
- Dynamic weather icon updates based on current conditions

## Files

- `index.html` — application layout and structure
- `weatherapp.css` — styling for the weather dashboard
- `weatherapp.js` — JavaScript logic for fetching and displaying weather data

## How it works

1. User enters a city name in the search input.
2. Pressing `Enter` triggers a request to the OpenWeatherMap current weather API.
3. The app parses the returned JSON and updates the weather cards.
4. The page displays the latest weather values and changes the icon to match the condition.

## Setup & Usage

1. Open `index.html` in a browser.
2. Enter a city name in the search field, then press `Enter`.
3. The weather dashboard updates automatically.

## API Configuration

The app currently uses an embedded OpenWeatherMap API key inside `weatherapp.js`:

```js
const apiKey = "*************************************";
```

For a production project, replace this with a secure method of managing API keys or use a backend proxy.

## Notes

- The app uses Font Awesome icons for weather and navigation visuals.
- If a city is not found, the app shows an alert message.
- The current date/time is generated locally via JavaScript.
