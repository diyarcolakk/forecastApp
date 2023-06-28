const ForecastDetail = ({ weather, dt, main, wind, cityName }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="main-container">
      <h2>{weather[0].main}</h2>
      <p>{new Date(dt * 1000).toLocaleDateString("en-EN", options)}</p>
      <h1>{main.temp} ⁰C </h1>
      <h3>{cityName}</h3>
      <p>
        {main.temp_max} / {main.temp_min} ⁰C{" "}
      </p>
      <p> Wind Speed : {wind.speed}</p>
    </div>
  );
};
export default ForecastDetail;
