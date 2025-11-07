import { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { cities } from "../services/weatherService";
import CityTabs from "../components/CityTabs";

export default function WeatherPage() {
  const [currentCity, setCurrentCity] = useState(cities[0]);
  const { data, isLoading } = useWeather(currentCity);

  return (
    <div className="min-h-screen flex flex-col items-center bg-cyan-400">
      <CityTabs currentCity={currentCity} onChange={setCurrentCity} />
    </div>
  );
}
