import iconDrizzle from './assets/icons/icon-drizzle.webp';
import iconFog from './assets/icons/icon-fog.webp';
import iconPartlyCloudy from './assets/icons/icon-partly-cloudy.webp';
import iconRain from './assets/icons/icon-rain.webp';
import iconSnow from './assets/icons/icon-snow.webp';
import iconStorm from './assets/icons/icon-storm.webp';
import iconSunny from './assets/icons/icon-sunny.webp';

import { useEffect, useState } from 'react';

export const getWeatherImg = (weather) => {
    switch (weather) {
        case 'sunny':
            return iconSunny;
        case 'storm':
            return iconStorm;
        case 'rain':
            return iconRain;
        case 'drizzle':
            return iconDrizzle;
        case 'cloudy':
            return iconPartlyCloudy;
        case 'fog':
            return iconFog;
        case 'snow':
            return iconSnow;
        default:
            return iconPartlyCloudy; // fallback icon
    }
};

export function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export const fetchLocations = async (searchStr) => {
    // https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json

    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchStr}&count=5&language=en&format=json`);
    return response.json()
}

export const fetchWeatherData = async (latitude, longitude) => {
    // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,precipitation,relative_humidity_2m,wind_speed_10m,weather_code
    // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,precipitation,relative_humidity_2m,wind_speed_10m,weather_code&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,precipitation,relative_humidity_2m,wind_speed_10m,weather_code`);
    return response.json()

}

