import WeatherDetails from "./WeatherDetails"
import WeatherInfo from "./WeatherInfo"
export default function WeatherInfoContainer({ data }) {

    return (
        <div className="flex flex-col gap-[32px] ">
            <WeatherInfo data={data} />
            <WeatherDetails data={data} />
        </div>


    )
}
