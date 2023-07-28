import { Component } from "../../../core";
import html from "bundle-text:./form-create-product.html";

export class FormCreateProductComponent extends Component {
  render() {
    this.innerHTML = html;

    this.querySelector('[data-action="save"]').addEventListener('click', () => {
      try {
        this.checkValidFormData(this.getFormData());
        this.dispatchEvent(new CustomEvent('formData', { detail: { formData: this.getFormData() } }));
      } catch (error) {
        const errorMessage = error.message;
        this.dispatchEvent(new CustomEvent('errorData', { detail: { errorMessage } }));
      }
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

  checkValidFormData(formData) {
    if (this.isEmptyInputs(formData)) {
      throw new Error("You have not filled in data in all required fields*. Try again!");
    }
    if (!this.isCorrectNumericData(formData)) {
      throw new Error("You entered non-numeric input data! Try to correct it.");
    }
    if (!this.isCorrectBarcode(formData)) {
      throw new Error("You entered the wrong barcode format! The barcode must consist of only 12 digits.");
    }
  }

  isEmptyInputs = (formData) => {
    return Object.values(formData).some(value => !value);
  }

  isNumeric = (value) => {
    return /\d+(\.\d+)?/g.test(value);
  }

  isCorrectNumericData = ({ regularPrice: regularPrice, salePrice: salePrice, stock: stock }) => {
    return (this.isNumeric(regularPrice) && this.isNumeric(salePrice) && this.isNumeric(stock));
  }

  isCorrectBarcode = ({ barcode: barcode }) => {
    return /^\d{12}$/.test(barcode) ? true : false;
  }

  static create() {
    return Component.create("form-create-product");
  }
}

Component.define("form-create-product", FormCreateProductComponent);