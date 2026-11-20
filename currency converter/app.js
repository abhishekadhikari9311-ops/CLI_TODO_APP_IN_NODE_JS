//https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD

const https = require("https");
const readline = require("readline");
require("dotenv").config();
let url = `https://v6.exchangerate-api.com/v6/${process.env.CURRENCY_CONVERTER_API}/latest/USD`;
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let curOut = https
  .get(
    url,
    {
      headers: {
        accept: "application/json",
      },
    },
    (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        // console.log(data);
        const obj = JSON.parse(data);
        // console.log(obj);
        const rates = obj.conversion_rates;
        // console.log(rates);
        rl.question("enter the  currency in US DOllar", (US) => {
          rl.question("enter the targeted currency", (tarCur) => {
            // Convert currency input to uppercase
            tarCur = tarCur.toUpperCase();

            // Access the exchange rate dynamically
            let rate = rates[tarCur];

            let convertedAmt = US * rate;
            console.log(`${US}usd equals to rate ${convertedAmt} ${tarCur}`);
            rl.close();
          });
        });
      });
    },
  )
  .on("error", (err) => {
    console.log("error occured--->", err);
  });
