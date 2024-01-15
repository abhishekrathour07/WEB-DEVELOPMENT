function isLeap(year) {

    if (year % 4 === 0 && year % 100 !== 0 && year % 400 === 0) {
        console.log("Leap year.");

    }
    else {
        console.log(" Not Leap year.");
    }
}
isLeap(2004);
 prompt = require("prompt-sync");
let x = parseInt(prompt("Enter the year to check"));

isLeap(x)
