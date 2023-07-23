import { Component } from "../../core";
import html from "bundle-text:./review.html";
import "./review.css";

export class ReviewComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("review");
  }
}

Component.define("review", ReviewComponent);