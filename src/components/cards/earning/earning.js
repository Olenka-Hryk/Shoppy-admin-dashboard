import { Component } from "../../../core";
import html from "bundle-text:./earning.html";

export class EarningComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("earning");
  }
}

Component.define("earning", EarningComponent);