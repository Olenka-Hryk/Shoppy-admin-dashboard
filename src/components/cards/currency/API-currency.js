const VALUTA = ["USD", "EUR", "GBP", "PLN"];

export class Currency {
  constructor(currency) {
    this.baseCurrency = currency.baseCurrency;
    this.currency = currency.currency;
    this.purchaseRate = currency.purchaseRateNB ? currency.purchaseRateNB : currency.purchaseRate;
    this.saleRate = currency.saleRateNB ? currency.saleRateNB : currency.saleRate;
  }

  static getExchange() {
    return fetch("http://localhost:3000/currency/today", {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ exchangeRate }) =>
        exchangeRate
          .filter((rate) => VALUTA.includes(rate.currency))
          .map((currency) => new Currency(currency))
      );
  }
}