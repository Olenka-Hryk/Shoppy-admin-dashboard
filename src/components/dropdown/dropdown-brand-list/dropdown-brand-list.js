import { Component } from "../../../core";
import html from "bundle-text:./dropdown-brand-list.html";

export class DropdownBrandListComponent extends Component {
  render() {
    this.innerHTML = html;
    this.dropdown = this.querySelector("div.dropdown");
    this.dropdownBrandContainer = this.querySelector("div.dropdown-menu");
    this.dropdownSelectedValue = this.querySelector("#dropdownMenuButton");


    this.dropdown.addEventListener(
      "click",
      (event) => {
        this.querySelector("app-svg-icon[icon]").classList.toggle("dropdown-menu--open");
      });

    this.dropdownBrandContainer.addEventListener(
      "mouseover",
      (event) => {
        const dropdownItem = event.target.closest(".dropdown-item");
        if (!dropdownItem) return;
        this.dropdownSelectedValue.innerText = event.target.innerText;
        this.dropdownSelectedValue.setAttribute("style", "color: var(--main-text-color) !important");
      });
  }

  createDropdownBrandList(brand) {
    const span = document.createElement("span");
    span.classList.add("dropdown-item");
    span.innerText = brand.name;
    return span;
  }

  updateDropdownBrandList(brands) {
    this.dropdownBrandContainer.innerHTML = "";
    for (const brand of brands) {
      this.dropdownBrandContainer.append(this.createDropdownBrandList(brand));
    }
  }

  static create() {
    return Component.create("dropdown-brand-list");
  }
}

Component.define("dropdown-brand-list", DropdownBrandListComponent);