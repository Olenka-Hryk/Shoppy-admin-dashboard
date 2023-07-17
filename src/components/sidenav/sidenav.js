import { Component } from "../../core";
import html from "bundle-text:./sidenav.html";
import "./sidenav.css";

export class SidenavComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("sidenav");
  }
}

Component.define("sidenav", SidenavComponent);