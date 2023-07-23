import { Component, Router } from "../core";
import html from "bundle-text:./main.html";
import "./main.css";

export class MainComponent extends Component {
  render() {
    this.innerHTML = html;
    this.initRouter();
  }

  static create() {
    return Component.create("main");
  }

  initRouter() {
    // Init router
    Router.init({
      slot: document.getElementById("router-slot"),
      routes: [
        {
          path: "/",
          load: () => import("../pages/dashboard/dashboard").then((m) => m.DashboardComponent),
        },
        {
          path: "/login",
          load: () => import("../pages/login/login").then((m) => m.LoginComponent),
        },
        {
          path: "/products/product-list",
          load: () => import("../pages/product-list/product-list").then((m) => m.ProductListComponent),
        },
        {
          path: "/products/create-product",
          load: () => import("../pages/create-product/create-product").then((m) => m.CreateProductComponent),
        },
        {
          path: "/categories/category-list",
          load: () => import("../pages/category-list/category-list").then((m) => m.CategoryListComponent),
        },
      ],
    }).start();
  }
}

Component.define("main", MainComponent);