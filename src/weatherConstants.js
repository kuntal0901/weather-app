export const weatherUnits = [

    {
        id: "temp",
        name: "Temperature",
        value: [
            {
                id: "cel",
                name: "Celsius (degC)"
            },
            {
                id: "far",
                name: "Fahrenheit (def F)"
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
