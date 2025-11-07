import { useState } from "react";

const cities = ["Rio de Janeiro", "Beijing", "Los Angeles"];

export default function WeatherPage() {
  const [currentCity, setCurrentCity] = useState(cities[0]);

  return (
    <div className="p-6 flex flex-col items-center">
      WEATHER APP
    </div>
  );
}
