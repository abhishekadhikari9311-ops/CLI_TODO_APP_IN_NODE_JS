const readline = require("readline");
const fs = require("fs");
const path = require("path");
const { log } = require("console");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("enter your fileName?", (fileName) => {
  rl.question("enter the content of the file?", (fileContent) => {
    const filePath = path.join(__dirname, `${fileName}.txt`);
    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        console.log("err occured:---->", err);
      }
      console.log("file created successfully...............");
    });
    rl.close();
  });
});
