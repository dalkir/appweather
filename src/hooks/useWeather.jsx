import { useQuery } from "@tanstack/react-query";
import { getFullWeatherByCity } from "../services/weatherService";

export const useWeather = (city) => {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => getFullWeatherByCity(city),
    staleTime: 1000 * 60 * 10,
  });
};
