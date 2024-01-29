const prompt = require("prompt-sync")();

function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function calculator(a, b, func) {
    return func(a, b);
}
var a = parseInt(prompt("Enter the value of a "));
var b = parseInt(prompt("Enter the value of b "));

console.log(calculator(a, b, add));
console.log(calculator(a, b, sub));
console.log(calculator(a, b, mul));
console.log(calculator(a, b, div));