import axios from 'axios';

const OPENWEATHERMAP_API_URL = 'http://api.openweathermap.org/data/2.5/weather';
const OPENWEATHERMAP_API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

const getWeatherIconUrl = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

const getCityWeather = (cityName) => {
    const targetUrl = `${OPENWEATHERMAP_API_URL}?q=${cityName}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`;
    return axios.get(targetUrl).then(response => response.data).then(data => {
        return {
            temperature: data.main.temp,
            weatherIcon: getWeatherIconUrl(data.weather[0].icon),
            weatherDescription: data.weather[0].description,
            windSpeed: data.wind.speed,
            windDirection: data.wind.deg
        };
    });
}

export default getCityWeather;