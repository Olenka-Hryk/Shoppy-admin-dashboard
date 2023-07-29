import { Component } from "../../../core";
import html from "bundle-text:./modal-edit-product.html";

export class ModalEditProductComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  open() {
    $('#modalBoxEditProduct').modal('show');
  }

  static create() {
    return Component.create("modal-edit-product");
  }
}

Component.define("modal-edit-product", ModalEditProductComponent);