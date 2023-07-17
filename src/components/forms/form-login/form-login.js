import { Component } from "../../../core";
import html from "bundle-text:./form-login.html";

export class FormLoginComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("form-login");
  }
}

Component.define("form-login", FormLoginComponent);