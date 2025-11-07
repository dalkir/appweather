import { useState, useEffect } from "react";
import { useWeather } from "../hooks/useWeather";

const cities = ["Rio de Janeiro", "Beijing", "Los Angeles"];

export default function WeatherPage() {
  const [currentCity, setCurrentCity] = useState(cities[0]);
  const { data, isLoading, error, refetch, isFetching } = useWeather(currentCity);

  console.log(data, isLoading, error, refetch, isFetching)

  return (
    <div className="min-h-screen flex flex-col items-center bg-cyan-400">
      WEATHER APP

      {!isLoading && (
        <div className="">
          {data.weather.weather[0].main}
        </div>
      )}
    </div>
  );
}
