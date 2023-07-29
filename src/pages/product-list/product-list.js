import { Component } from "../../core";
import { Product, Category } from "../../api";
import html from "bundle-text:./product-list.html";

export class ProductListComponent extends Component {
  render() {
    this.innerHTML = html;
    this.productTable = this.querySelector("app-table-product-list");
    this.categoryBadge = this.querySelector("app-category-badge");
    this.pagination = this.querySelector('app-pagination');
    this.modalDeleteProduct = this.querySelector("app-modal-delete-product");
    this.customAlert = this.querySelector("app-alert");
    this.query = '';
    this.page = 1;
    this.categories = [];

    this.productTable.addEventListener('productDelete', async (event) => {
      const confirmed = await this.modalDeleteProduct.open();

      if (confirmed) {
        Product.deleteProduct(event.detail.productId).then(() => {
          this.updateProducts();
          this.customAlert.displayAlert("Success!", "Success! The product has been deleted from the database.");
        });
      }
    });

    this.querySelector("#search-product-action").addEventListener(
      "click",
      () => {
        this.page = 1;
        this.query = this.querySelector("#input-search-product-list").value;
        this.updateProducts();
      });

    this.querySelector("#input-search-product-list").addEventListener("input", (event) => {
      this.page = 1;
      this.query = event.target.value;
      this.updateProducts();
    });

    this.pagination.addEventListener('pageChange', (event) => {
      this.page = event.detail.page;
      this.updateProducts();
    });

    this.updateProducts();

    Category.getCategories()
      .then((res) => this.categoryBadge.updateCategoryBadgeList(res))
      .then(() => {
        this.querySelector("app-category-badge[appearance='badgeLarge']").addEventListener(
          "click",
          (event) => {
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
    this.categories = [...$("app-category-badge[appearance='badgeLarge'] div#category-badge > span span.category-badge__item--active")]
      .map((elem) => $(elem).data("category"));
    this.updateProducts();
  }

  updateProducts() {
    Product.getProducts({
      page: this.page,
      query: this.query,
      categories: this.categories,
      pageSize: 7,
    }).then((res) => {
      this.pagination.setAttribute('pages', res.meta.pagination.pageCount || 1);
      this.productTable.updateTable(res);
    });
  }

  static create() {
    return Component.create("product-list");
  }
}

Component.define("product-list", ProductListComponent);