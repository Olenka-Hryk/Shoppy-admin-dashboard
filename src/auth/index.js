import "./styles.css";
import { USERNAME } from "./config";

export class AuthPage {
  render() {
    const msg = document.createElement("h1");
    msg.classList.add("auth-msg");
    msg.innerText = `Hello ${USERNAME}`;
    return msg;
  }
}
