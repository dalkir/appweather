import axios from "axios";

const API_KEY = "9170e0e85794088df319259526c55afd";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getFullWeatherByCity = async (city) => {
  try {
    const weatherApi = axios.get(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`
    );

    const forecastApi = axios.get(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=en`
    );

    const [weatherResponse, forecastResponse] = await Promise.all([weatherApi, forecastApi]);

    return {
      weather: weatherResponse.data,
      forecast: forecastResponse.data
    }
  } catch(error) {
    console.error(error);
  }
};
