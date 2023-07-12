import { AuthPage } from "./auth";

const container = document.getElementById("app");

const authPage = new AuthPage();
container.append(authPage.render());
