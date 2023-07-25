import { Component } from "../../core";
import { Category } from "../../api";
import { Brand } from "../../api";
import html from "bundle-text:./create-product.html";

export class CreateProductComponent extends Component {
  render() {
    this.innerHTML = html;

    Brand.getBrands()
    .then((res) => this.querySelector("app-form-create-product app-dropdown-brand-list").updateDropdownBrandList(res));

    Category.getCategories()
      .then((res) => this.querySelector("app-category-badge").updateCategoryBadgeList(res))
      .then(() => {
        this.querySelector("app-form-create-product app-category-badge").addEventListener(
          "click",
          (event) => {
            const badge = event.target.closest(".category-badge__item");
            if (!badge) return;
            $(badge).toggleClass("category-badge__item--active");

            if ($(badge).hasClass("category-badge__item--active")) {
              this.makeDisableAllNonActiveBadge();
            } else this.makeVisibleAllActiveBadge();
          });
      });
  }

  makeDisableAllNonActiveBadge() {
    const listElements = $("div#category-badge > span span.category-badge__item");
    listElements.each((index, element) => {
      if (!$(element).hasClass("category-badge__item--active")) {
        $(element).addClass("category-badge__item--disabled");
        $(element).css("pointer-events", "none");
      }
    });
  }

  makeVisibleAllActiveBadge() {
    const listElements = $("div#category-badge > span span.category-badge__item");
    listElements.each((index, element) => {
      $(element).removeClass("category-badge__item--disabled");
      $(element).css("pointer-events", "auto");
    });
  }

  static create() {
    return Component.create("create-product");
  }
}

Component.define("create-product", CreateProductComponent);