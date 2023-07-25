import { Component } from "../../core";
import { Category } from "../../api";
import { Product } from "../../api";
import html from "bundle-text:./category-list.html";

export class CategoryListComponent extends Component {
  render() {
    this.innerHTML = html;
    this.categoryBadge = this.querySelector("app-category-badge");
    this.categoryTable = this.querySelector("app-table-category-list");
    this.tablePagination = this.querySelector("app-pagination");

    Category.getCategories()
      .then((res) => this.categoryBadge.updateCategoryBadgeList(res))
      .then(() => {
        this.querySelector("app-category-badge").addEventListener(
          "click",
          (event) => {
            this.categoryTable.setAttribute("style", "display: block");
            this.tablePagination.setAttribute("style", "display: block");

            const badge = event.target.closest(".category-badge__item");
            if (!badge) return;
            $(badge).toggleClass("category-badge__item--active");
            this.findAllActiveCategory();
          }
        );
      });
  }

  findAllActiveCategory() {
    const activeCategories = [...$("div#category-badge > span span.category-badge__item--active")]
      .map((elem) => $(elem).data("category"));

    if (activeCategories.length) {
      Product.getProducts({ page: 1, categories: activeCategories }).then((res) =>
        this.categoryTable.updateTable(res));
    } else {
      this.categoryTable.setAttribute("style", "display: none");
      this.tablePagination.setAttribute("style", "display: none");
    }
  }

  static create() {
    return Component.create("category-list");
  }
}

Component.define("category-list", CategoryListComponent);