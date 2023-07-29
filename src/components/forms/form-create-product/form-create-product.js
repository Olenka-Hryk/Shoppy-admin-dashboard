import { Component } from "../../../core";
import { Brand, Category } from "../../../api";
import html from "bundle-text:./form-create-product.html";

export class FormCreateProductComponent extends Component {
  render() {
    this.innerHTML = html;

    Brand.getBrands()
      .then((res) => this.querySelector("app-dropdown-brand-list").updateDropdownBrandList(res));

    Category.getCategories()
      .then((res) => this.querySelector("app-category-badge[appearance='badgeSmall']").updateCategoryBadgeList(res))
      .then(() => {
        this.querySelector("app-category-badge[appearance='badgeSmall']").addEventListener(
          "click",
          (event) => {
            const badge = event.target.closest(".category-badge__item");
            if (!badge) return;
            $(badge).toggleClass("category-badge__item--active");

            if ($(badge).hasClass("category-badge__item--active")) {
              this.makeDisableAllNonActiveBadge();
            } else {
              this.makeVisibleAllActiveBadge();
            }
          });
      });

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

  makeDisableAllNonActiveBadge() {
    const listElements = $("app-category-badge[appearance='badgeSmall'] div#category-badge > span span.category-badge__item");
    listElements.each((index, element) => {
      if (!$(element).hasClass("category-badge__item--active")) {
        $(element).addClass("category-badge__item--disabled");
        $(element).css("pointer-events", "none");
      }
    });
  }

  makeVisibleAllActiveBadge() {
    const listElements = $("app-category-badge[appearance='badgeSmall'] div#category-badge > span span.category-badge__item");
    listElements.each((index, element) => {
      $(element).removeClass("category-badge__item--disabled");
      $(element).css("pointer-events", "auto");
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