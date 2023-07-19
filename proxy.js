const PRIVATBANK_CURRENCY_API_URL = "https://api.privatbank.ua/p24api/exchange_rates?json&date=";
const CURRENT_DATE = getCurrentDate();

const express = require("express");
const axios = require("axios");
const app = express();
const cors = require('cors');
const port = 3000;


app.use(cors());

app.get("/currency/today", (req, res) => {
  axios
    .get(`${PRIVATBANK_CURRENCY_API_URL}${CURRENT_DATE}`)
    .then((response) => {
      res.send(response.data);
    });
});

app.listen(port, () => {
  console.log(`Shoppy app listening on port ${port}`);
});


function correctFormatDate(date) {
  if (date < 10) {
    date = "0" + date;
  }
  return date;
}

function getCurrentDate() {
  const date = new Date();
  return `${correctFormatDate(date.getDate())}.${correctFormatDate(date.getMonth())}.${date.getFullYear()}`;
}