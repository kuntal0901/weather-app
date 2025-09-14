import DaysDropdown from "./DaysDropdown";
import { hourlyForeCast } from "./weatherConstants";
import { getWeatherImg } from "./weatherUtils";

export default function HourlyForecast() {
    return (
        <div className="w-[384px] p-[24px] gap-[16px] flex flex-col bg-(--neutral-800) rounded-[20px]">
            <div className='flex justify-between items-center'>
                <div className="text-preset-5">Hourly Forecast</div>
                <DaysDropdown />
            </div>
            {hourlyForeCast.map((data = {}) => {
                const { id = "", name = "", weather = "", temp = "" } = data;
                return (
                    <div className="flex justify-between items-center bg-(--neutral-700) shadow-(--box-shadow-2) pl-[12px] pr-[16px] py-[10px] rounded-[8px]" key={id}>
                        <div className="flex items-center">
                            <img src={getWeatherImg(weather)} alt={weather} className="w-[40px] h-[40px]" />
                            <div className="text-preset-5-medium">{name}</div>
                        </div>
                        <div className="text-preset-7">{temp}</div>
                    </div>
                )
            })}
        </div>
    )
}
