import { weatherInfoKeys } from './weatherConstants';

export default function WeatherDetails() {
    console.log(weatherInfoKeys);
    return (
        <div className='flex w-full gap-[24px]'>
            {weatherInfoKeys.map((obj = {}) => {
                const { id = '', name = '', value = '' } = obj
                return (
                    <div className='flex-1 flex flex-col bg-(--neutral-800) p-[20px] gap-[24px] shadow-(--box-shadow-2) rounded-[12px]' key={id}>
                        <div className='text-preset-6 text-(--neutral-200)'>{name}</div>
                        <div className='text-preset-3'>{value}</div>
                    </div>
                )

            })}
        </div>
    )
}
