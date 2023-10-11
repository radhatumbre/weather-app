import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButton from "./TopButton";
import Inputs from "./Inputs";
import TimeAndLocation from "./TimeAndLocation";
import TempDetails from "./TempDetails";
import Forecast from "./Forecast";
import getWeatherData from "../services/WeatherService";
import getFormattedWeatherData from "../services/WeatherService";
import { useEffect, useState } from "react";

function WeatherCard() {
  const [query, setQuery] = useState({ q: "kolkata" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData(query, units).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div>
      <div
        className={`border-r-2 border-blue-500 w-1/4 bg-green-900 max-w-screen-sm min-h-screen py-5 px-2  rounded-lg`}
      >
        <TopButton setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TempDetails weather={weather} />
            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherCard;
