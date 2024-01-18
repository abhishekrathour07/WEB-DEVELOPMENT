const prompt = require("prompt-sync")();

function fibonacci(n) {
    if (n === 1) {
        return [0];
    }

    var t1 = 0, t2 = 1;
    var arr = [t1, t2];

    for (var i = 2; i < n; i++) {
        var t3 = t1 + t2;
        arr.push(t3);
        t1 = t2;
        t2 = t3;
    }
    return arr;
}

var n = parseInt(prompt("Enter the number of terms in the Fibonacci series: "));
var result = fibonacci(n);
console.log(result);
 