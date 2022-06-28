import "./current-weather.css";
import { getCurrentDate } from "../api";

const CurrentWeather = ({ data }) => {
  const currentDay = getCurrentDate();

  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const currentStringDay = new Date().getDay();

  return (
    <div>
      <div className="weather">
        <div className="top">
          <div className="">
            <p className="city">{data.city}</p>
            <p className="title-today">
              {WEEK_DAYS[currentStringDay - 1]} {currentDay}{" "}
            </p>
            <p className="weather-description">{data.weather[0].description}</p>
          </div>
          <img
            src={`icons/${data.weather[0].icon}.png`}
            alt="weather"
            className="weather-icon"
          />
        </div>
        <div className="bottom">
          <p className="temperature">{Math.round(data.main.temp)}°c</p>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">{data.main.humidity} %</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
