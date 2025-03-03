import { useEffect, useState } from "react";
import getCityWeather from "../services/weatherService";

const Weather = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const city = country.capital[0];
    getCityWeather(city).then(data => {
      setWeather(data);
    });
  }, [country]);

  if (!weather) {
    return <p>Loading weather data...</p>;
  }

  return (
    <>
      <p><strong>Temperature:</strong> {weather.temperature} Celsius</p>
      <img src={weather.weatherIcon} alt={weather.weatherDescription} />
      <p><strong>Wind:</strong> {weather.windSpeed} m/s direction {weather.windDirection}°</p>
    </>
  );
};

export default Weather;