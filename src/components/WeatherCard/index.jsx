import { getHHmm } from "../../utils";

const WeatherCardSkeleton = () => (
  <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 text-center w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto animate-pulse">
    <div className="h-8 w-28 bg-gray-300 rounded mx-auto mb-4"></div>
    <div className="mx-auto bg-gray-300 rounded-full w-18 h-18 mb-2"></div>
    <div className="h-4 w-16 bg-gray-300 rounded mx-auto mb-2"></div>
    <div className="h-4 w-32 bg-gray-300 rounded mx-auto mb-2"></div>
    <div className="mt-4 h-8 w-32 bg-gray-300 rounded mx-auto mb-2"></div>
    <div className="h-4 w-44 bg-gray-300 rounded mx-auto mb-2"></div>
  </div>
);

const WeatherCard = ({ data, isLoading }) => {
  if (isLoading) {
    return <WeatherCardSkeleton />
  } else {
    const { name, main: { temp, humidity }, weather, dt } = data;
    const { description, icon } = weather[0];

    const date = new Date(dt * 1000)
    const hhmm = getHHmm(date);
    return (
      <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 text-center w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{name}</h2>
        <img
          className="mx-auto h-18 mb-2"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        <p className="text-blue-500 text-sm sm:text-base">
          {humidity || 0}%
        </p>
        <p className="capitalize text-gray-600 text-sm sm:text-base">
          {description}
        </p>
        <p className="text-3xl sm:text-4xl font-bold mt-2">{temp}°C</p>
        <p className="text-gray-400 text-sm sm:text-base mt-2">
          Last updated at {hhmm}
        </p>
      </div>
    );
  }
}

export default WeatherCard;
