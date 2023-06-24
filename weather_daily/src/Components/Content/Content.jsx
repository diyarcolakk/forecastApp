import { useContext } from "react";
import { myContext } from "../../Context/Context";
import "./Content.css";
import { WiDaySunny,WiCloud,WiRain,WiSnow,WiThunderstorm,WiFog } from "react-icons/wi";
const Content = () => {
  const newContext = useContext(myContext);

  const { cityWeather, cityName } = newContext;


  return (
    <div className="content-container">
      {cityWeather && (
   
        <div className="grid-containers">
        <h1>{cityName}</h1>
        <div className="main-container">
          <div>Hava Derecesi : {cityWeather.main.temp} °C</div>
          <div className="icon-container">
          {cityWeather.weather[0].description === 'clear sky' && <WiDaySunny size={70}  />}
          {cityWeather.weather[0].description === 'few clouds' && <WiCloud  size={70} />}
          {cityWeather.weather[0].description === 'rain' && <WiRain  size={70} />}
          {cityWeather.weather[0].description === 'snow' && <WiSnow  size={70} />}
          {cityWeather.weather[0].description === 'thunderstorm' && <WiThunderstorm  size={70} />}
          {cityWeather.weather[0].description === 'mist' && <WiFog size={70}  />}
          </div>
          <div>Rüzgar Hızı: {cityWeather.wind.speed}</div>
          <div>Havanın Durumu: {cityWeather.weather[0].main}</div>

        </div>
        </div>
       
      )}

    </div>
  );
};
export default Content;
