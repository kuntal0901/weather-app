// import { dailyForecast } from "./weatherConstants";
import { useEffect, useState } from "react";
import { getWeatherImg } from "./weatherUtils";

export default function DailyForecast({ data = {} }) {

    const [dailyForecast, setDailyForecast] = useState([]);
    useEffect(() => {
        const { temperature_2m_max = [], temperature_2m_min = [], weather_code = [] } = data;

    }, [data])

    return (
        <div className="flex flex-col gap-[20px]">
            <div className="text-preset-5">Daily Forecast</div>
            <div className="flex gap-[16px] w-full">
                {dailyForecast.map((data = {}) => {
                    const { id = "", day = "", weather = "", dayTemp = "", nightTemp = "" } = data;
                    return (
                        <div key={id} className="flex-1 flex flex-col items-center gap-[16px] px-[10px] py-[16px] rounded-[12px] bg-(--neutral-800) stroke-(--box-shadow-2)">
                            <div className="text-preset-6">{day}</div>
                            <img src={getWeatherImg(weather)} alt={weather} className="w-[60px] h-[60px]" />
                            <div className="flex justify-between text-preset-7 self-stretch">
                                <div>{dayTemp}</div>
                                <div>{nightTemp}</div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
