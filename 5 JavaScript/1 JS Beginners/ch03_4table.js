const prompt = require("prompt-sync")();
let x = prompt("Enter the number you want to find the table");

for (let i = 1; i <= 10; i++) {
    console.log(x + " x " + i + " = " + (x * i));
}

console.log("Rverse table of entered number ");
for (let i = 10; i >= 0; i--) {
    console.log(x + " x " + i + " = " + (x * i));
}