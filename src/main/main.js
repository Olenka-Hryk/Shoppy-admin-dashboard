import { Component, Router } from "../core";
import html from "bundle-text:./main.html";
import "./main.css";

export class MainComponent extends Component {
  render() {
    this.innerHTML = html;
    this.initRouter();
  }

  static create() {
    return Component.create("main");
  }

  initRouter() {
    // Init router
    Router.init({
      slot: document.getElementById("router-slot"),
      routes: [
        {
          path: "/",
          load: () => import("../pages/dashboard/dashboard").then((m) => m.DashboardComponent),
        },
        {
          path: "/login",
          load: () => import("../pages/login/login").then((m) => m.LoginComponent),
        },
      ],
    }).start();
  }
}

Component.define("main", MainComponent);