import { Component } from "../../../core";
import html from "bundle-text:./currency.html";
import "./currency.css";

export class CurrencyComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("currency");
  }
}

Component.define("currency", CurrencyComponent);