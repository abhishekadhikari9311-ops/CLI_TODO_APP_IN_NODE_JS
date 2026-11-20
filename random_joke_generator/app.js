// url="https://icanhazdadjoke.com/"
let url = "https://icanhazdadjoke.com/";
const https = require("https");

https
  .get(
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
        console.log("data:", data);
        const dataObj = JSON.parse(data);
        console.log("data obj:---------", dataObj);
      });
    },
  )
  .on("error", (err) => {
    console.log("err occured:----->", err);
  });
