import { Component } from "../../../core";
import html from "bundle-text:./calendar.html";
import "./calendar.css";

export class CalendarComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("calendar");
  }
}

Component.define("calendar", CalendarComponent);