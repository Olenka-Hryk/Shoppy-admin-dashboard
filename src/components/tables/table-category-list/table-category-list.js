import { Component } from "../../../core";
import html from "bundle-text:./table-category-list.html";

export class TableCategoryListComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("table-category-list");
  }
}

Component.define("table-category-list", TableCategoryListComponent);