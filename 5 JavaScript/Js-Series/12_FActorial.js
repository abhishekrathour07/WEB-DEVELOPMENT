const factorial = (num) => {
    if (num == 0 || num == 1)
        return 1;
    else
        return num * factorial(num - 1);
}

const prompt = require("prompt-sync")();

let num = prompt("Enter the number to find factorial")

console.log(factorial(num));