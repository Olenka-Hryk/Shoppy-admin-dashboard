import { Component } from "../../core";
import html from "bundle-text:./pagination.html";
import "./pagination.css";

export class PaginationComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("pagination");
  }
}

Component.define("pagination", PaginationComponent);