import { Product } from "../../../api/product";
import { Component } from "../../../core";
import html from "bundle-text:./modal-edit-product.html";

export class ModalEditProductComponent extends Component {
  render() {
    this.innerHTML = html;
    this.formEditProduct = this.querySelector('app-form-create-product');
    this.customAlert = this.querySelector("app-alert");
  }

  open(productId) {
    return new Promise(async (resolve, reject) => {
      try {
        const product = await Product.getProductById(productId);
        this.formEditProduct.setFormData(product);
        $('#modalBoxEditProduct').modal('show');
      } catch (error) {
        reject(error);
        return;
      }

      const onFormData = (event) => {
        resolve(event.detail.formData);
        $('#modalBoxEditProduct').modal('hide');
      };

      const onErrorData = (event) => {
        this.customAlert.displayAlert("Error", "Data entered incorrectly!");
      };

      const onModalClose = () => {
        this.formEditProduct.removeEventListener('formData', onFormData);
        this.formEditProduct.removeEventListener('errorData', onErrorData);
        resolve(null);
      };

      $('#modalBoxEditProduct').one('hide.bs.modal', onModalClose);
      this.formEditProduct.addEventListener('formData', onFormData);
      this.formEditProduct.addEventListener('errorData', onErrorData);
    });
  }

  static create() {
    return Component.create("modal-edit-product");
  }
}

Component.define("modal-edit-product", ModalEditProductComponent);