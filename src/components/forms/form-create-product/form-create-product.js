import { Component } from "../../../core";
import html from "bundle-text:./form-create-product.html";

export class FormCreateProductComponent extends Component {
  render() {
    this.innerHTML = html;

    this.querySelector('[data-action="save"]').addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('formData', { detail: { formData: this.getFormData() } }));
    });
  }

  getFormData() {
    return {
      name: this.querySelector('[data-product="name"]').value,
      slug: this.querySelector('[data-product="name"]').value.split(" ").join("-"),
      // image: "",
      brand: [+this.querySelector('app-dropdown-brand-list').dataset.selected],
      category: [+this.querySelector('[data-product="category"].category-badge__item--active')?.dataset.categoryId],
      regularPrice: +this.querySelector('[data-product="regularPrice"]').value,
      description: this.querySelector('[data-product="description"]').value,
      salePrice: +this.querySelector('[data-product="salePrice"]').value,
      stock: +this.querySelector('[data-product="stock"]').value,
      barcode: +this.querySelector('[data-product="barcode"]').value,
      // productStatus: this.querySelector('[data-product="status"] input:checked').value,
    };
  }

  static create() {
    return Component.create("form-create-product");
  }
}

Component.define("form-create-product", FormCreateProductComponent);