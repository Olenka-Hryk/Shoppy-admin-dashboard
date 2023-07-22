import { Component } from "../../core";
import html from "bundle-text:./create-product.html";

export class CreateProductComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("create-product");
  }
}

Component.define("create-product", CreateProductComponent);