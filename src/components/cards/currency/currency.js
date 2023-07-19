import { Component } from "../../../core";
import html from "bundle-text:./currency.html";
import "./currency.css";
import { Currency } from "./API-currency";

export class CurrencyComponent extends Component {
  async render() {
    this.innerHTML = html;

    const rates = await Currency.getExchange();
    displayCurrencyExchange(rates);
  }

  static create() {
    return Component.create("currency");
  }
}

Component.define("currency", CurrencyComponent);

function displayCurrencyExchange(rates) {
  for (const rate of rates) {
    document.querySelector(`div[data-currency="${rate.currency}"] #rateBuy`).innerHTML = rate.purchaseRate.toFixed(2);
    document.querySelector(`div[data-currency="${rate.currency}"] #rateSale`).innerHTML = rate.saleRate.toFixed(2);
  }
}