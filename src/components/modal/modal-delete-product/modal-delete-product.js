import { Component } from "../../../core";
import html from "bundle-text:./modal-delete-product.html";

export class ModalDeleteProductComponent extends Component {
  render() {
    this.innerHTML = html;
    
    $('[data-action="modal-close"]').on("click", () => {
      $('#modalBoxDeleteProduct').modal('hide');
    });

    $('[data-action="modal-delete"]').on("click", () => {
      $('#modalBoxDeleteProduct').modal('hide');
      const message = "Success! The product has been deleted from the database.";
      this.dispatchEvent(new CustomEvent('modalDeletedClick', { detail: { message } }));
    });
  }

  static create() {
    return Component.create("modal-delete-product");
  }
}

Component.define("modal-delete-product", ModalDeleteProductComponent);