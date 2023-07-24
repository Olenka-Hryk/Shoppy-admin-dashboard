import { Component } from "../../core";
import html from "bundle-text:./category-list.html";
import { Category } from "../../api";

export class CategoryListComponent extends Component {
  render() {
    this.innerHTML = html;
    this.categoryBadge = this.querySelector("app-category-badge");

    Category.getCategories()
    .then((res) => this.categoryBadge.updateCategoryBadgeList(res));
  }

  static create() {
    return Component.create("category-list");
  }
}

Component.define("category-list", CategoryListComponent);