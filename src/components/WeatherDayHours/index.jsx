import { getNextDayTimestamp } from "../../utils";

const WeatherDayHoursSkeleton = () => (
  <div className="p-4 sm:p-6 text-center w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto animate-pulse">
    <div className="h-8 w-28 bg-gray-300 rounded mx-auto mb-4"></div>
    <div className="mx-auto bg-gray-300 rounded-full w-18 h-18 mb-2"></div>
    <div className="h-4 w-16 bg-gray-300 rounded mx-auto mb-2"></div>
    <div className="h-4 w-32 bg-gray-300 rounded mx-auto mb-2"></div>
    <div className="h-4 w-32 bg-gray-300 rounded mx-auto mb-1"></div>
  </div>
);

const WeatherDayHours = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex gap-2">
        <WeatherDayHoursSkeleton />
        <WeatherDayHoursSkeleton />
      </div>
    )
  } else {
    const nextDayStart = getNextDayTimestamp();

    const todayForecasts = data.list.filter(item => {
      return (item.dt * 1000) < nextDayStart;
    });

    return (
      <div className="flex overflow-x-scroll">
        {
          todayForecasts.map(((forecast, index) => {
            const { main: { temp, humidity }, weather, dt } = forecast;
            const { description, icon } = weather[0];
            const hour = new Date(dt * 1000).getHours();

            return (
              <div key={index} className="p-4 sm:p-6 text-center w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
                <h2 className="text-xl font-bold mb-2">{temp}°C</h2>
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
                <p className="text-gray-700 font-bold mt-2">{hour > 10 ? hour : `0${hour}`}:00</p>
              </div>
            );
          }))
        }
      </div>
    )
  }
}

export default WeatherDayHours;
