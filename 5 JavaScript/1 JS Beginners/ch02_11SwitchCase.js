const prompt = require("prompt-sync")();

let add = (a, b) => {
    return a + b;
}
let sub = (a, b) => {
    return a - b;
}
let mul = (a, b) => {
    return a * b;
}
let div = (a, b) => {
    return a / b;
}
let a = parseInt(prompt("Enter the value of a "));
let b = parseInt(prompt("Enter the value of b "));
console.log("========================Enter your choice=================\n 1) Add\n 2) Subtract\n 3) Multiply\n 4) Divide");
const choice = parseInt(prompt(" "));
switch (choice) {
    case 1:
        console.log(add(a, b));
        break;
    case 2:
        console.log(sub(a, b));
        break;
    case 3:
        console.log(mul(a, b));
        break;
    case 4:
        console.log(div(a, b));
        break;
    default:
        console.log("Enter correct choice");
        break;
}
