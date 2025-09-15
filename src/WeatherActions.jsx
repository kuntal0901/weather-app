import { useState } from "react";
import SearchContainer from "./SearchContainer";
import WeatherDataContainer from "./WeatherDataContainer";
import { fetchWeatherData } from "./weatherUtils";

export default function WeatherActions() {
    const [weatherDetails, setWeatherDetails] = useState(null);

    const onSearch = (locationData = {}) => {
        fetchData(locationData)
    }

    const fetchData = async (locationData = {}) => {
        try {
            const { latitude = "", longitude = "" } = locationData;
            const result = await fetchWeatherData(latitude, longitude);
            console.log(result);
            setWeatherDetails(result);
        } catch (err) {
            console.error("Error fetching locations:", err);
        }
    };

    fetchData();

    return (
        <div className="">
            <SearchContainer onSearch={onSearch} />
            {weatherDetails !== null ? <WeatherDataContainer weatherDetails={weatherDetails} /> : null}
        </div>
    )
}
