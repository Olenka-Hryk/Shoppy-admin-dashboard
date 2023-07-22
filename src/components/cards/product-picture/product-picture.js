import { Component } from "../../../core";
import html from "bundle-text:./product-picture.html";

export class ProductPictureComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("product-picture");
  }
}

Component.define("product-picture", ProductPictureComponent);