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

import iconUiNotification from "bundle-text:../../assets/svg-ui/ui-notification.svg";
import iconUiArrowRight from "bundle-text:../../assets/svg-ui/ui-arrow-right.svg";
import iconUiArrowLeft from "bundle-text:../../assets/svg-ui/ui-arrow-left.svg";
import iconUiArrowTop from "bundle-text:../../assets/svg-ui/ui-arrow-top.svg";
import iconUiArrowDown from "bundle-text:../../assets/svg-ui/ui-arrow-down.svg";
import iconUiCircle from "bundle-text:../../assets/svg-ui/ui-list-circle.svg";
import iconUiPrice from "bundle-text:../../assets/svg-ui/ui-price.svg";
import iconUiPriceSale from "bundle-text:../../assets/svg-ui/ui-price-sale.svg";
import iconUiBarcode from "bundle-text:../../assets/svg-ui/ui-barcode.svg";
import iconUiBuildingStore from "bundle-text:../../assets/svg-ui/ui-building-store.svg";
import iconUiUploadPicture from "bundle-text:../../assets/svg-ui/ui-upload-picture.svg";
import iconUiButtonAdd from "bundle-text:../../assets/svg-button/button-add.svg";
import iconUiButtonMore from "bundle-text:../../assets/svg-button/button-more.svg";
import iconUiButtonEdit from "bundle-text:../../assets/svg-button/button-edit.svg";
import iconUiButtonDelete from "bundle-text:../../assets/svg-button/button-delete.svg";

import iconCategorySmartPhone from "bundle-text:../../assets/svg-product-category/category-smart-phone.svg";
import iconCategoryComputer from "bundle-text:../../assets/svg-product-category/category-computer.svg";
import iconCategoryGlass from "bundle-text:../../assets/svg-product-category/category-glass.svg";
import iconCategoryShoes from "bundle-text:../../assets/svg-product-category/category-shoes.svg";
import iconCategoryTV from "bundle-text:../../assets/svg-product-category/category-tv.svg";
import iconCategoryTechnics from "bundle-text:../../assets/svg-product-category/category-technics.svg";

import iconBrandApple from "bundle-text:../../assets/svg-brand/brand-apple.svg";
import iconBrandNike from "bundle-text:../../assets/svg-brand/brand-nike.svg";
import iconBrandAdidas from "bundle-text:../../assets/svg-brand/brand-adidas.svg";
import iconBrandBose from "bundle-text:../../assets/svg-brand/brand-bose.svg";
import iconBrandSmeg from "bundle-text:../../assets/svg-brand/brand-smeg.svg";
import iconBrandSony from "bundle-text:../../assets/svg-brand/brand-sony.svg";


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

  iconUiNotification,
  iconUiArrowRight,
  iconUiArrowLeft,
  iconUiArrowTop,
  iconUiArrowDown,
  iconUiCircle,
  iconUiPrice,
  iconUiPriceSale,
  iconUiBarcode,
  iconUiBuildingStore,
  iconUiUploadPicture,
  iconUiButtonAdd,
  iconUiButtonMore,
  iconUiButtonEdit,
  iconUiButtonDelete,

  iconCategorySmartPhone,
  iconCategoryComputer,
  iconCategoryGlass,
  iconCategoryShoes,
  iconCategoryTV,
  iconCategoryTechnics,

  iconBrandApple,
  iconBrandNike,
  iconBrandAdidas,
  iconBrandBose,
  iconBrandSmeg,
  iconBrandSony
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