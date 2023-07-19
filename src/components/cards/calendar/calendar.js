import { Component } from "../../../core";
import html from "bundle-text:./calendar.html";
import "./calendar.css";

const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentDay = new Date();

export class CalendarComponent extends Component {
  render() {
    this.innerHTML = html;
    displayCurrentDate();
  }

  static create() {
    return Component.create("calendar");
  }
}

Component.define("calendar", CalendarComponent);


function displayCurrentDate() {
  document.getElementById("month").textContent = monthNames[currentDay.getMonth()];
  document.getElementById("weekDay").textContent = `${weekDay[currentDay.getDay()]}, ${currentDay.getDate()}`;
  updateClock();
}

function updateClock() {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString('uk');
}

setInterval(updateClock, 1000);