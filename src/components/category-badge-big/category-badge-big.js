import { Component } from "../../core";
import html from "bundle-text:./category-badge-big.html";
import "./category-badge-big.css";

export class CategoryBadgeBigComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("category-badge-big");
  }
}

Component.define("category-badge-big", CategoryBadgeBigComponent);