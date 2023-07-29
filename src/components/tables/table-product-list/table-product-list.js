import { Component } from "../../../core";
import html from "bundle-text:./table-product-list.html";
import rowTemplate from "bundle-text:./row-template.html";

export class TableProductListComponent extends Component {
  render() {
    this.innerHTML = html;
    this.tbody = this.querySelector("tbody");
  }

  createRow(product) {
    const tr = document.createElement("tr");
    tr.innerHTML = rowTemplate;

    tr.querySelector('[data-cell="id"]').innerText = product.id;
    tr.querySelector('[data-cell="image"]').setAttribute("src", product.imageUrl);
    tr.querySelector('[data-cell="name"]').innerText = product.name;
    tr.querySelector('[data-cell="brand-name"]').innerText = product.brand.name;
    tr.querySelector('[data-cell="category-icon"]').setAttribute("icon", product.category.iconCode);
    tr.querySelector('#underlayColor').setAttribute("style", `color: ${product.category.categoryColor}; width: 34px; height: 34px;`);
    tr.querySelector('[data-cell="category-name"]').innerText = product.category.name;
    tr.querySelector('[data-cell="brand-icon"]').setAttribute("icon", product.brand.iconCode);
    tr.querySelector('[data-cell="regular-price"]').innerText = product.regularPrice;
    tr.querySelector('[data-cell="stock"]').innerText = product.stock;
    
    tr.querySelector('[data-action="delete"]').onclick = () => {
      this.dispatchEvent(new CustomEvent('productDelete', { detail: { productId: product.id } }));
    };
    return tr;
  }

  updateTable({ meta, products }) {
    this.tbody.innerHTML = "";

    for (const product of products) {
      this.tbody.append(this.createRow(product));
    }
  }

  static create() {
    return Component.create("table-product-list");
  }
}

Component.define("table-product-list", TableProductListComponent);