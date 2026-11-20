const { log } = require("console");
const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todos = [];

function showMenu() {
  console.log("\n1. Add a Task...........");
  console.log("\n2. View Tasks.......");
  console.log("\n3. Exit Tasks......");
  rl.question("\nchoose an option ", handleInput);
}

const handleInput = (opt) => {
  if (opt === "1") {
    console.log("\n Stage Of Adding A Task");
    rl.question("\n Add a Task", (task) => {
      todos.push(task);
      showMenu();
    });
  } else if (opt === "2") {
    console.log("\n  todo lists:");
    todos.forEach((curEle, index) => {
      console.log(`\n ${index + 1} ${curEle}`);
      showMenu();
    });
  } else if (opt === "3") {
    rl.close();
  } else {
    console.log("\n please provide valid option............");
    showMenu();
  }
};

showMenu();
