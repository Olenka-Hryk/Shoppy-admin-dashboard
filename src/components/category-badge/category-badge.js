import { Component } from "../../core";
import html from "bundle-text:./category-badge.html";
import "./category-badge.css";

export class CategoryBadgeComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("category-badge");
  }
}

Component.define("category-badge", CategoryBadgeComponent);