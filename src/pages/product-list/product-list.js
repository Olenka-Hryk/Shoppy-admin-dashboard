import { Component } from "../../core";
import html from "bundle-text:./product-list.html";
import { Product } from "../../api";

export class ProductListComponent extends Component {
  render() {
    this.innerHTML = html;
    this.productTable = this.querySelector("app-table-product-list");

    Product.getProducts({
      page: 1,
    }).then((res) => this.productTable.updateTable(res));
  }

  static create() {
    return Component.create("product-list");
  }
}

Component.define("product-list", ProductListComponent);