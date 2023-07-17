import { Component } from "../../../core";
import html from "bundle-text:./weather-widget.html";
import "./weather-widget.css";

export class WeatherWidgetComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("weather-widget");
  }
}

Component.define("weather-widget", WeatherWidgetComponent);