//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]
require("dotenv").config();
const https = require("https");

const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const location = "Pokhara";

const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?key=${process.env.weather_api}&unitGroup=metric&include=current&contentType=json`;

https.get(
  url,
  {
    headers: {
      Accept: "application/json",
    },
  },
  (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      //   console.log(data);
      const obj = JSON.parse(data);
      //   console.log(obj);
      rl.question("enter city:for ex--pokhara", (pok) => {
        rl.question("enter date in format yyyy-mm-dd", (date) => {
          let js_date = new Date();
          let formattedDate = `${js_date.getFullYear()}-${String(js_date.getMonth() + 1).padStart(2, "0")}-${String(js_date.getDate()).padStart(2, "0")}`;
          console.log(formattedDate);

          if (formattedDate  && obj.currentConditions) {
            console.log("\nCurrent Weather");
            console.log("------------------");

            console.log(
              "Current Temperature:",
              obj.currentConditions.temp,
              "°C",
            );

            console.log(
              "Current Conditions:",
              obj.currentConditions.conditions,
            );
          }
          rl.close();
        });
      });
    });
  },
);
