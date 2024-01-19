const prompt = require("prompt-sync")();

function factorial(n) {
    var fact = 1;
    for (var i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
var n = prompt("Enter the number to find factorial");
var result = factorial(n);
console.log(result);

