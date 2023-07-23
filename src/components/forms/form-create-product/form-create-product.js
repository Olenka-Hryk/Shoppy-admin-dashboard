import { Component } from "../../../core";
import html from "bundle-text:./form-create-product.html";

export class FormCreateProductComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("form-create-product");
  }
}

Component.define("form-create-product", FormCreateProductComponent);