const WeatherCardSkeleton = () => (
  <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 text-center w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto animate-pulse">
    <div className="h-8 w-28 bg-gray-300 rounded mx-auto mb-4"></div>
    <div className="mx-auto bg-gray-300 rounded-full w-18 h-18 mb-2"></div>
    <div className="h-4 w-32 bg-gray-300 rounded mx-auto mb-2"></div>
    <div className="mt-4 h-8 w-32 bg-gray-300 rounded mx-auto"></div>
  </div>
);

const WeatherCard = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <WeatherCardSkeleton />
  } else {
    console.log(weatherData)
    const { name, main: { temp }, weather } = weatherData;
    const { description, icon } = weather[0];
    return (
      <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 text-center w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{name}</h2>
        <img
          className="mx-auto h-18 mb-2"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        <p className="capitalize text-gray-600 text-sm sm:text-base">
          {description}
        </p>
        <p className="text-3xl sm:text-4xl font-bold mt-2">{temp}°C</p>
      </div>
    );
  }
}

export default WeatherCard;
