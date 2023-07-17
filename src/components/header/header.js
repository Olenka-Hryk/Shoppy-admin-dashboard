import { Component } from "../../core";
import html from "bundle-text:./header.html";
import "./header.css";

export class HeaderComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("header");
  }
}

Component.define("header", HeaderComponent);