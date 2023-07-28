import { Component } from "../../core";
import html from "bundle-text:./alert.html";
import "./alert.css";

export class AlertComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  displayAlert(status, message) {
    this.querySelector("#alert").setAttribute("style", "display: block");
    this.querySelector("#alertStatus").innerText = status;
    this.querySelector("#alertDescription").innerText = message;
    setTimeout(() => {
      this.querySelector("#alert").setAttribute("style", "display: none !important");
    }, 2000);
  }

  static create() {
    return Component.create("alert");
  }
}

Component.define("alert", AlertComponent);