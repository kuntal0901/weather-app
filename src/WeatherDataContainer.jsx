import DailyForecast from './DailyForecast';
import HourlyForecast from './HourlyForecast';
import WeatherInfoContainer from './WeatherInfoContainer';

export default function WeatherDataContainer({ weatherDetails = {} }) {
    const { current = {}, daily = {}, hourly = {} } = weatherDetails
    return (
        <div className='flex gap-[32px] justify-center'>
            <div className='flex flex-col w-[800px] gap-[48px]'>
                <WeatherInfoContainer data={current} />
                <DailyForecast daily={daily} />
            </div>
            <HourlyForecast hourly={hourly} />
        </div>
    )
}
