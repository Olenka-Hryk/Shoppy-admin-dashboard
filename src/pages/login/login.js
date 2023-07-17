import { Component } from "../../core";
import html from "bundle-text:./login.html";
import "./login.css";

export class LoginComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("login");
  }
}

Component.define("login", LoginComponent);