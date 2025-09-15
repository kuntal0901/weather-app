import iconSunny from './assets/icons/icon-sunny.webp';
import backgroundTodayLarge from './assets/images/bg-today-large.svg';

export default function WeatherInfo({ data = {} }) {
    const { temperature_2m = 0 } = data;
    return (
        <div className="bg-no-repeat flex justify-between items-center h-[286px] px-[24px]" style={{ backgroundImage: `url(${backgroundTodayLarge})` }}>
            <div className=''>
                <div className='text-preset-4'>Berlin,Germany</div>
                <div className='text-preset-6'>Tuesday, Aug 5 2025</div>
            </div>
            <div className='flex items-center'>
                <img src={iconSunny} className='w-[120px] h-[120px]' />
                <div className='text-preset-1'>{temperature_2m}°</div>
            </div>
        </div>
    )
}
