import iconDrizzle from './assets/icons/icon-drizzle.webp';
import iconFog from './assets/icons/icon-fog.webp';
import iconPartlyCloudy from './assets/icons/icon-partly-cloudy.webp';
import iconRain from './assets/icons/icon-rain.webp';
import iconSnow from './assets/icons/icon-snow.webp';
import iconStorm from './assets/icons/icon-storm.webp';
import iconSunny from './assets/icons/icon-sunny.webp';

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
