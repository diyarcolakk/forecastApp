import {
    WiDaySunny,
    WiRain,
    WiSnow,
    WiThunderstorm,
    WiFog,
    WiCloudy,
    WiDayShowers,
  } from "react-icons/wi";
  

const WeatherIcons = ({weather}) => {

  return (
    <div className="top-container">
                <div className="icon-container">
                  {weather[0].main === "Clear" && (
                    <WiDaySunny className="icon-colors" size={120}  />
                  )}

                  {weather[0].main === "Rain" && <WiRain className="icon-colors" size={120} />}
                  {weather[0].main === "Snow" && <WiSnow className="icon-colors" size={120} />}
                  {weather[0].main === "Thunderstorm" && (
                    <WiThunderstorm size={120} />
                  )}
                  {weather[0].main === "Mist" && <WiFog className="icon-colors" size={120} />}
                  {weather[0].main === "Clouds" && <WiCloudy className="icon-colors" size={120} />}
                  {weather[0].main === "Drizzle" && <WiDayShowers className="icon-colors" size={120} />}
                </div>
              </div>
  )
}
export default WeatherIcons