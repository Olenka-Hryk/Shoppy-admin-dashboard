import { Component } from "../../../core";
import html from "bundle-text:./form-login.html";
const REGEXP_EMAIL_ADDRESS = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export class FormLoginComponent extends Component {
  render() {
    this.innerHTML = html;
    this.PASSWORD = "admin";
    this.userName = this.querySelector("[data-login='userName']");
    this.userEmail = this.querySelector("[data-login='userEmail']");
    this.userPassword = this.querySelector("[data-login='userPassword']");
    this.customAlert = this.querySelector("app-alert");

    this.querySelector("[data-login='actionLogin']").addEventListener('click', () => {
      try {
        this.checkValidFormLogin();
        localStorage.setItem('userName', this.userName.value);
        localStorage.setItem('userEmail', this.userEmail.value);
        localStorage.setItem('userPassword', this.userPassword.value);
        window.open("/", '_self');
      } catch (error) {
        this.customAlert.displayAlert("Error", error.message);
      }
    });
  }

  checkValidFormLogin() {
    if (this.isEmptyInputs()) {
      throw new Error("You have not filled in data in all required fields*. Try again!");
    }
    if (!this.isCorrectEmail()) {
      throw new Error("You have entered an invalid email! Try to correct it.");
    }
    if (!this.isCorrectPassword()) {
      throw new Error('You entered an incorrect password! \n If you forgot your password, click "Forgot Password?" link.');
    }
  }

  isEmptyInputs = () => {
    return !this.userName.value && !this.userEmail.value && !this.userPassword.value;
  }

  isCorrectEmail = () => {
    return REGEXP_EMAIL_ADDRESS.test(this.userEmail.value);
  }

  isCorrectPassword = () => {
    const password = new RegExp(`\\b${this.PASSWORD}\\b`);
    const userPassword = this.userPassword.value;
    return userPassword.match(password) === null ? false : true;
  }

  static create() {
    return Component.create("form-login");
  }
}

Component.define("form-login", FormLoginComponent);