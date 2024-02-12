
const fibonacci = (num) => {
    if (num === 0)
        return 0
    else if (num === 1) {
        return 1
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

const prompt = require("prompt-sync")();

const num = prompt("Enter how much series you want")

for (let i = 0; i < num; i++)
    console.log(fibonacci(i));


