import { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { cities } from "../services/weatherService";
import CityTabs from "../components/CityTabs";
import WeatherCard from "../components/WeatherCard";
import WeatherDayHours from "../components/WeatherDayHours";

export default function WeatherPage() {
  const [currentCity, setCurrentCity] = useState(cities[0]);
  const { data, isLoading } = useWeather(currentCity);

  return (
    <div className="min-h-screen flex flex-col items-center bg-cyan-400">
      <CityTabs currentCity={currentCity} onChange={setCurrentCity} />

      <div className="flex">
        <div className="min-w-80 mt-5 p-4">
          <WeatherCard isLoading={isLoading} data={data?.weather} />
        </div>

        <div className="min-w-2xl max-w-full h-full mt-8">
          <div className="bg-white shadow-md rounded-2xl p-4 overflow-x-scroll">
            <div className="text-xl font-bold flex justify-center">
              Next Hours
            </div>
            <WeatherDayHours isLoading={isLoading} data={data?.forecast} />
          </div>
        </div>
      </div>
    </div>
  );
}
