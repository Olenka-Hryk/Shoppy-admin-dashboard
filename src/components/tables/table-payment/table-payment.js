import { Component } from "../../../core";
import html from "bundle-text:./table-payment.html";

export class TablePaymentComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("table-payment");
  }
}

Component.define("table-payment", TablePaymentComponent);