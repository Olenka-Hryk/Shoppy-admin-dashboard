import { Component } from "../../core";
import html from "bundle-text:./category-badge.html";
import categoryBadgeTemplate from "bundle-text:./category-badge-template.html";
import "./category-badge.css";

export class CategoryBadgeComponent extends Component {
  render() {
    this.innerHTML = html;
    this.categoryBadgeContainer = this.querySelector("#category-badge");
  }

  createCategoryBadgeItem(category) {
    const span = document.createElement("span");
    span.innerHTML = categoryBadgeTemplate;
    span.querySelector('span.category-badge__item').setAttribute("style", `color: ${category.categoryColor};`);
    span.querySelector('span.category-badge__item').innerHTML += category.name;
    span.querySelector('app-svg-icon').setAttribute("icon", category.iconCode);
    return span;
  }

  updateCategoryBadgeList(categories) {
    this.categoryBadgeContainer.innerHTML = "";
    for (const category of categories) {
      this.categoryBadgeContainer.append(this.createCategoryBadgeItem(category));
    }
  }

  static create() {
    return Component.create("category-badge");
  }
}

Component.define("category-badge", CategoryBadgeComponent);