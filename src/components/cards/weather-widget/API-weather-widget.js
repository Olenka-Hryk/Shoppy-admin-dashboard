const OPEN_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?";
const NAVIGATOR_GEOLOCATION_OPTIONS = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
};

export class Weather {
    constructor(weather) {
        this.location = `${weather.sys.country}, ${weather.name}`;
        this.description = `${weather.weather[0].main} / ${weather.weather[0].description}`;
        this.icon = `../../images/weather-widget-openweather-icon/${weather.weather[0].icon}.png`;
        this.temperature = Math.round(weather.main.temp);
        this.windSpeed = weather.wind.speed;
        this.pressure = weather.main.pressure;
        this.humidity = weather.main.humidity;
        this.sunriseTime = `${new Date(weather.sys.sunrise * 1000).getHours()}:${new Date(weather.sys.sunrise * 1000).getMinutes()}`;
        this.sunsetTime = `${new Date(weather.sys.sunset * 1000).getHours()}:${new Date(weather.sys.sunset * 1000).getMinutes()}`;
    }

    static getCoordinates(options) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }

    static async getLocationWeather() {
        let position = null;

        try {
            position = await Weather.getCoordinates(NAVIGATOR_GEOLOCATION_OPTIONS);
        } catch (error) {
            alert("Geolocation is not supported by this browser.");
            console.log(`ERROR(${error.code}): ${error.message}`);
            return null;
        }

        const params = {
            lat: `${position.coords.latitude}`,
            lon: `${position.coords.longitude}`,
            units: "metric",
            appid: "9d0512353050482b90e0a55cabda84aa",
        };

        const query = Object.keys(params)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
            .join("&");

        return await fetch(OPEN_WEATHER_API_URL + query, { method: "GET" })
            .then((res) => res.json())
            .then((weather) => new Weather(weather));
    }
}