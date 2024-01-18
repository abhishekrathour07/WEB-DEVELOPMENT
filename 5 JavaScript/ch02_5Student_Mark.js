const prompt = require("prompt-sync")();

let s1 = parseInt(prompt("Enter the marks in sub 1: "));
let s2 = parseInt(prompt("Enter the marks in sub 2: "));
let s3 = parseInt(prompt("Enter the marks in sub 3: "));

let total = s1 + s2 + s3
let per = parseFloat(total / 3);

if (s1 >= 40 && s2 >= 40 && s3 >= 40) {
    if (per > 40 && per <= 50) {
        console.log("your per is " + per + " and your frade is D");
    }
    else if (per >= 50 && per <= 60) {
        console.log("Your per is " + per + " and your frade is c");
    }
    else if (per >= 60 && per <= 70) {
        console.log("Your per is " + per + " and your frade is B");
    }
    else if (per >= 70 && per <= 80) {
        console.log("Your per is " + per + " and your frade is A");
    }
    else {
        console.log("You are in top 10 list");
    }
}
console.log("You are fail with total mark = " + total + " and percentage = " + per);