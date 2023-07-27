import { Component } from "../../core";
import { Category, Product } from "../../api";
import html from "bundle-text:./category-list.html";

export class CategoryListComponent extends Component {
  render() {
    this.innerHTML = html;
    this.categoryBadge = this.querySelector("app-category-badge");
    this.categoryTable = this.querySelector("app-table-category-list");
    this.pagination = this.querySelector('app-pagination');
    this.page = 1;
    this.categories = [];

    this.pagination.addEventListener('pageChange', (event) => {
      this.page = event.detail.page;
      this.updateProducts();
    });

    Category.getCategories()
      .then((res) => this.categoryBadge.updateCategoryBadgeList(res))
      .then(() => {
        this.querySelector("app-category-badge").addEventListener(
          "click",
          (event) => {
            this.categoryTable.setAttribute("style", "display: block");
            this.pagination.setAttribute("style", "display: block");

            const badge = event.target.closest(".category-badge__item");
            if (!badge) return;
            $(badge).toggleClass("category-badge__item--active");
            this.findAllActiveCategory();
          }
        );
      });
  }

  findAllActiveCategory() {
    this.page = 1;
    this.categories = [...$("div#category-badge > span span.category-badge__item--active")]
      .map((elem) => $(elem).data("category"));

    if (this.categories.length) {
      this.updateProducts();
    } else {
      this.categoryTable.setAttribute("style", "display: none");
      this.pagination.setAttribute("style", "display: none");
    }
  }

  updateProducts() {
    Product.getProducts({
      page: this.page,
      categories: this.categories,
      pageSize: 7,
    }).then((res) => {
      this.pagination.setAttribute('pages', res.meta.pagination.pageCount || 1);
      this.categoryTable.updateTable(res);
    });
  }

  static create() {
    return Component.create("category-list");
  }
}

Component.define("category-list", CategoryListComponent);