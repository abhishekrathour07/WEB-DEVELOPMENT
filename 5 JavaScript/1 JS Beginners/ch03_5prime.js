const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter the number to check it is prime or not : "));
let count = 0;
for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        console.log("Not a prime number : ");
        count = 1
        break;
    }
}
if (n === 0 || n === 1) {
    console.log("Not a prime number");
} else if (count === 0) {
    console.log("Entered number is prime number ");
}