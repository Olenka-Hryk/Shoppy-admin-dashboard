import { Component } from "../../../core";
import html from "bundle-text:./table-product-list.html";

export class TableProductListComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("table-product-list");
  }
}

Component.define("table-product-list", TableProductListComponent);