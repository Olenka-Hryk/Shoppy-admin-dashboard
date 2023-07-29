import { Component } from "../../../core";
import html from "bundle-text:./modal-delete-product.html";

export class ModalDeleteProductComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  open() {
    $('#modalBoxDeleteProduct').modal('show');
    
    return new Promise((resolve) => {
      $('[data-action="modal-close"]').on("click", () => {
        $('#modalBoxDeleteProduct').modal('hide');
        resolve(false);
      });
  
      $('[data-action="modal-delete"]').on("click", () => {
        $('#modalBoxDeleteProduct').modal('hide');
        resolve(true);
      });
    });
  }

  static create() {
    return Component.create("modal-delete-product");
  }
}

Component.define("modal-delete-product", ModalDeleteProductComponent);