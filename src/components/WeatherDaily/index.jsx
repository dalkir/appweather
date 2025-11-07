import { getNextDayTimestamp } from "../../utils";


const WeatherDailySkeleton = () => (
  <div className="p-4 flex justify-around gap-4">
    <div className="bg-gray-300 rounded-full w-16 h-16"></div>
    <div className="min-w-36 flex flex-col justify-center items-center">
      <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-18 bg-gray-300 rounded"></div>
    </div>
    <div className="h-4 w-24 mt-6 bg-gray-300 rounded"></div>
    <div className="h-4 w-24 mt-6 bg-gray-300 rounded"></div>
  </div>
);

const WeatherDaily = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-2">
        <WeatherDailySkeleton />
        <WeatherDailySkeleton />
        <WeatherDailySkeleton />
        <WeatherDailySkeleton />
      </div>
    )
  } else {
    const nextDayStart = getNextDayTimestamp();

    const tomorrowForecasts = data.list.filter(item => {
      return (item.dt * 1000) >= nextDayStart;
    });

    const daily = {};

    tomorrowForecasts.forEach(dayWeather => {
      const { main: { temp }, weather, dt } = dayWeather;
      const { description, icon } = weather[0];

      const date = new Date(dt * 1000).toISOString().split('T')[0];

      if (!daily[date]) {
        daily[date] = { min: temp, max: temp };
      } else {
        daily[date].min = Math.min(daily[date].min, temp);
        daily[date].max = Math.max(daily[date].max, temp);
        daily[date].description = description;
        daily[date].icon = icon;
      }
    });

    const dailyArray = Object.entries(daily).map(([dayDate, dayData]) => {
      return {
        date: dayDate,
        ...dayData
      }
    })

    return (
      <div className="flex flex-col w-full overflow-x-scroll">
        {
          dailyArray.map(((dayData, index) => {
            const { description, icon, min, max, date } = dayData;

            return (
              <div key={index} className="p-4 flex justify-around gap-4">
                <img
                  className="h-16 w-16"
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt="icon"
                />
                <div className="min-w-36 flex flex-col justify-center items-center">
                  <p className="text-gray-700 font-bold">{date}</p>
                  <p className="capitalize text-gray-600 text-sm sm:text-base">
                    {description}
                  </p>
                </div>
                <p className="text-m flex items-center text-gray-800">{min}°C <span className="text-sm text-gray-600 ml-2">(min)</span></p>
                <p className="text-m flex items-center text-gray-800">{max}°C <span className="text-sm text-gray-600 ml-2">(max)</span></p>
              </div>
            );
          }))
        }
      </div>
    )
  }
}

export default WeatherDaily;
