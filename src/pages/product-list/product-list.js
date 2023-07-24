import { Component } from "../../core";
import { Product } from "../../api";
import html from "bundle-text:./product-list.html";

export class ProductListComponent extends Component {
  render() {
    this.innerHTML = html;
    this.productTable = this.querySelector("app-table-product-list");

    this.querySelector("#input-search-product-list").addEventListener(
      "keypress",
      (event) => {
        if (event.key === "Enter") {
          this.searchProduct(event.target.value);
        }
      });

    this.querySelector("#search-product-action").addEventListener(
      "click",
      () => {
        const inputValue = this.querySelector("#input-search-product-list").value;
        this.searchProduct(inputValue);
      });

    Product.getProducts({
      page: 1,
    }).then((res) => this.productTable.updateTable(res));
  }

  searchProduct(query) {
    Product.getProducts({
      page: 1,
      query: query,
    }).then((res) => this.productTable.updateTable(res));
  }

  static create() {
    return Component.create("product-list");
  }
}

Component.define("product-list", ProductListComponent);