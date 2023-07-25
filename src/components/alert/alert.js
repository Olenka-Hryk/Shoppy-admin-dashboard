import { Component } from "../../core";
import html from "bundle-text:./alert.html";
import "./alert.css";

export class AlertComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("alert");
  }
}

Component.define("alert", AlertComponent);