const prompt = require("prompt-sync")();

var a = parseInt(prompt("Enter the value of a :"));
var b = parseInt(prompt("Enter the value of b :"));
if (a == b) {
    console.log(" use of double == operator");
}

console.log(a == b);   // true (value equality with type coercion)
console.log(a === b);  // false (strict equality, different types)
if (a === b) {
    console.log("Use of === operator");
}
