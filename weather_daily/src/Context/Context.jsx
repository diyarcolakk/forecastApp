import React, { useEffect, useState, createContext } from "react";
import { cities } from "../LocalApi/Local_API";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
export const myContext = createContext();

const Context = (props) => {
  const [cityWeather, setCityWeather] = useState(null);
  const [cityName,setCityName] = useState("İstanbul")


  useEffect(() => {
    const fetchData = async () => {
      try {
        const resolve = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=tr&units=metric`
        );
        setCityWeather(resolve.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cityName]);

  const deneme = {
    cities,
    cityWeather,
    setCityName,
    cityName,
  };

  return (
    <myContext.Provider value={deneme}>{props.children}</myContext.Provider>
  );
};
export default Context;
