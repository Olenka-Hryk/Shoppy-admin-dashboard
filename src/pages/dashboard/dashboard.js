import { Component } from "../../core";
import html from "bundle-text:./dashboard.html";
import "./dashboard.css";

export class DashboardComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("dashboard");
  }
}

Component.define("dashboard", DashboardComponent);