import { useContext } from "react";
import { myContext } from "../../Context/Context";
import "./Content.css";
import WeatherIcons from "./WeatherIcons";
import ForecastDetail from "./ForecastDetail";

const Content = () => {
  const newContext = useContext(myContext);
  const { cityWeather, cityName } = newContext;

 
  return (
    <div className="content-container">
      {cityWeather &&
        cityWeather.map((perDayByDay) => {
          const { weather, main, dt ,wind} = perDayByDay;
          return (
            <div key={dt} className="grid-containers">
              <WeatherIcons weather = {weather} />
              <ForecastDetail weather={weather} dt={dt} main={main} wind={wind} cityName={cityName}/>
            </div>
          );
        })}
    </div>
  );
};
export default Content;
