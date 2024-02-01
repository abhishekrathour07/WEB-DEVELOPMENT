const prompt = require("prompt-sync")();

let n = prompt("Enter the number");

let result = n%2==0? "Even Number": "Odd Number";
console.log(result);

let num = parseInt(prompt("Enter the number to check : "));
let data;
for (let i = 2; i < num; i++) {
    data = num % i == 0 ? "Not a prime number" : "prime number";
    break;
}
if (num === 0 || num === 1)
    console.log("Not a Prime number");
else if (num === 2)
    console.log("Prime number");
else
    console.log(data);