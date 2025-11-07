import { cities } from "../../services/weatherService";

const CityTabs = ({currentCity, onChange}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 bg-white w-full p-4">
      {cities.map((city) => {
        const currentBorder = currentCity === city
        ? 'border-b-2 border-b-amber-600 text-amber-700'
        : 'border-b-2 border-b-transparent text-gray-500 hover:text-black';
        return (
          <div className={`h-full cursor-pointer ${currentBorder}`} key={city} onClick={() => onChange(city)}>
            {city}
          </div>
        )
      })}
    </div>
  );
}

export default CityTabs;
