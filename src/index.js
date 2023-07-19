import "./main/main";
import "./components/forms/form-login/form-login";
import "./components/svg-icon/svg-icon";
import "./components/sidenav/sidenav";
import "./components/header/header";
import "./components/cards/weather-widget/weather-widget";
import "./components/cards/calendar/calendar";
import "./components/cards/note/note";
import "./components/cards/currency/currency";
import "./components/tables/table-payment/table-payment";
import "./components/cards/earning/earning";

const appContainer = document.getElementById("app");
appContainer.append(document.createElement("app-main"));