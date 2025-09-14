import WeatherDetails from "./WeatherDetails"
import WeatherInfo from "./WeatherInfo"
export default function WeatherInfoContainer() {
    return (
        <div className="flex flex-col gap-[32px] ">
            <WeatherInfo />
            <WeatherDetails />
        </div>


    )
}
