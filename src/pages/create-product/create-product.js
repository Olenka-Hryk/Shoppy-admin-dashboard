import { Component } from "../../core";
import { Product } from "../../api";
import html from "bundle-text:./create-product.html";

export class CreateProductComponent extends Component {
  render() {
    this.innerHTML = html;
    this.productForm = this.querySelector('app-form-create-product');
    this.customAlert = this.querySelector("app-alert");

    this.productForm.addEventListener('errorData', (event) => {
      this.customAlert.displayAlert("Error", event.detail.errorMessage);
    });

    this.querySelector("app-form-create-product").addEventListener("formData", (event) => {
      Product.addProduct(event.detail.formData).then(() => {
        this.customAlert.displayAlert("Success", "The product is created and entered into the database.");
      }).catch(() => {
        this.customAlert.displayAlert("Error", "Wrong data! It is not possible to enter data into the database.");
      });
    });
  }

  static create() {
    return Component.create("create-product");
  }
}

Component.define("create-product", CreateProductComponent);