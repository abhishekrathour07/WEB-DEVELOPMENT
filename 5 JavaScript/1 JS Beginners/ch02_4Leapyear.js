function isLeap(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log("Leap year.");
    } else {
        console.log("Not a leap year.");
    }
}

prompt = require("prompt-sync")();
let x = parseInt(prompt("Enter the year to check: "));

isLeap(x);
