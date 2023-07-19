import { Component } from "../../../core";
import html from "bundle-text:./weather-widget.html";
import "./weather-widget.css";
import { Weather } from "../weather-widget/API-weather-widget";

export class WeatherWidgetComponent extends Component {
  render() {
    this.innerHTML = html;

    Weather.getLocationWeather().then((weatherInfo) => {
      displayCurrentWeather(weatherInfo)
    });
  }

  static create() {
    return Component.create("weather-widget");
  }
}

Component.define("weather-widget", WeatherWidgetComponent);


function displayCurrentWeather(weather) {
  document.getElementById("userLocation").innerHTML = weather.location;
  document.getElementById("weatherDescription").innerHTML = weather.description;
  document.getElementById("weatherIcon").innerHTML = weather.icon;
  document.getElementById("temperature").innerHTML = weather.temperature;
  document.getElementById("windSpeed").innerHTML = weather.windSpeed;
  document.getElementById("pressure").innerHTML = weather.pressure;
  document.getElementById("humidity").innerHTML = weather.humidity;
  document.getElementById("sunriseTime").innerHTML = weather.sunriseTime;
  document.getElementById("sunsetTime").innerHTML = weather.sunsetTime;
}