import { Component } from "../../core";
import html from "bundle-text:./category-list.html";

export class CategoryListComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("category-list");
  }
}

Component.define("category-list", CategoryListComponent);