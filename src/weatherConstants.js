export const weatherUnits = [

    {
        id: "temp",
        name: "Temperature",
        value: [
            {
                id: "cel",
                name: "Celsius (°C)"
            },
            {
                id: "far",
                name: "Fahrenheit (°F)"
            }
        ]
    },
    {
        id: "wind",
        name: "Wind Speed",
        value: [
            {
                id: "kmh",
                name: "km/h"
            },
            {
                id: "mph",
                name: "mph"
            }
        ]
    },
    {
        id: "pre",
        name: "Precipitation",
        value: [
            {
                id: "mm",
                name: "Millimeters (mm)"
            },
            {
                id: "in",
                name: "Inches (in)"
            }
        ]
    }
]

export const metricUnits = {
    temp: "cel",
    wind: "kmh",
    pre: "mm"
}

export const imperialUnits = {
    temp: "far",
    wind: "mph",
    pre: "in"
}

export const weatherInfoKeys = [{ id: "apparent_temperature", name: "Feels Like", value: "18°" }, { id: "relative_humidity_2m", name: "Humidity", value: "46%" }, { id: "wind_speed_10m", name: "Wind", value: "14 km/h" }, { id: "precipitation", name: "Precipitation", value: "0 mm" }]

export const dailyForecast = [
    {
        id: "mon",
        day: "Mon",
        weather: "rainy",
        dayTemp: "20°",
        nightTemp: "14°",
    },
    {
        id: "tue",
        day: "Tue",
        weather: "sunny",
        dayTemp: "25°",
        nightTemp: "16°",
    },
    {
        id: "wed",
        day: "Wed",
        weather: "cloudy",
        dayTemp: "22°",
        nightTemp: "15°",
    },
    {
        id: "thu",
        day: "Thu",
        weather: "drizzle",
        dayTemp: "19°",
        nightTemp: "13°",
    },
    {
        id: "fri",
        day: "Fri",
        weather: "storm",
        dayTemp: "18°",
        nightTemp: "12°",
    },
    {
        id: "sat",
        day: "Sat",
        weather: "rain",
        dayTemp: "21°",
        nightTemp: "14°",
    },
    {
        id: "sun",
        day: "Sun",
        weather: "sunny",
        dayTemp: "27°",
        nightTemp: "18°",
    },
];

export const hourlyForeCast = [
    {
        id: "3pm",
        name: "3 PM",
        weather: "rain",
        temp: "18°"
    },
    {
        id: "4pm",
        name: "4 PM",
        weather: "drizzle",
        temp: "19°"
    },
    {
        id: "5pm",
        name: "5 PM",
        weather: "cloudy",
        temp: "20°"
    },
    {
        id: "6pm",
        name: "6 PM",
        weather: "sunny",
        temp: "21°"
    },
    {
        id: "7pm",
        name: "7 PM",
        weather: "partly-cloudy",
        temp: "20°"
    },
    {
        id: "8pm",
        name: "8 PM",
        weather: "rainy",
        temp: "18°"
    },
    {
        id: "9pm",
        name: "9 PM",
        weather: "storm",
        temp: "17°"
    },
    {
        id: "10pm",
        name: "10 PM",
        weather: "cloudy",
        temp: "16°"
    }
];

export const days = [
    {
        id: "mon",
        name: "Monday"
    },
    {
        id: "tue",
        name: "Tuesday"
    },
    {
        id: "wed",
        name: "Wednesday"
    },
    {
        id: "thu",
        name: "Thursday"
    },
    {
        id: "fri",
        name: "Friday"
    },
    {
        id: "sat",
        name: "Saturday"
    },
    {
        id: "sun",
        name: "Sunday"
    }
];

