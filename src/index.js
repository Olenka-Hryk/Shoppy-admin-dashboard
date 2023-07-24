import "./main/main";
import "./components/forms/form-login/form-login";
import "./components/svg-icon/svg-icon";
import "./components/sidenav/sidenav";
import "./components/header/header";
import "./components/pagination/pagination";
import "./components/category-badge/category-badge";
import "./components/cards/weather-widget/weather-widget";
import "./components/cards/calendar/calendar";
import "./components/cards/note/note";
import "./components/cards/currency/currency";
import "./components/cards/earning/earning";
import "./components/cards/product-picture/product-picture";
import "./components/tables/table-payment/table-payment";
import "./components/tables/table-product-list/table-product-list";
import "./components/tables/table-category-list/table-category-list";

import "./components/forms/form-create-product/form-create-product";


const appContainer = document.getElementById("app");
appContainer.append(document.createElement("app-main"));