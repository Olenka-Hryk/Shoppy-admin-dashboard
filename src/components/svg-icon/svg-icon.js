import { Component } from "../../core";

import navDashboard from "bundle-text:../../assets/svg-sidenav/nav-dashboard.svg";
import navProducts from "bundle-text:../../assets/svg-sidenav/nav-products.svg";
import navCategories from "bundle-text:../../assets/svg-sidenav/nav-categories.svg";
import navOrders from "bundle-text:../../assets/svg-sidenav/nav-orders.svg";
import navCustomers from "bundle-text:../../assets/svg-sidenav/nav-customers.svg";
import navEarnings from "bundle-text:../../assets/svg-sidenav/nav-earnings.svg";
import navReviews from "bundle-text:../../assets/svg-sidenav/nav-reviews.svg";
import navShopSetting from "bundle-text:../../assets/svg-sidenav/nav-shop-setting.svg";
import navAccountSetting from "bundle-text:../../assets/svg-sidenav/nav-account-setting.svg";
import navSiteSetting from "bundle-text:../../assets/svg-sidenav/nav-site-setting.svg";
import navLogout from "bundle-text:../../assets/svg-sidenav/nav-logout.svg";
import iconUiArrowRight from "bundle-text:../../assets/svg-ui/ui-arrow-right.svg";
import iconUiCircle from "bundle-text:../../assets/svg-ui/ui-list-circle.svg";

import "./svg-icon.css";

const iconMap = {
  navDashboard,
  navProducts,
  navCategories,
  navOrders,
  navCustomers,
  navEarnings,
  navReviews,
  navShopSetting,
  navAccountSetting,
  navSiteSetting,
  navLogout,
  iconUiArrowRight,
  iconUiCircle
};

export class SvgIconComponent extends Component {
  render() {
    this.innerHTML = iconMap[this.getAttribute("icon")];
  }

  static create() {
    return Component.create("svg-icon");
  }
}

Component.define("svg-icon", SvgIconComponent);