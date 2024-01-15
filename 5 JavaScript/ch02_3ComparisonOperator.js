const prompt = require("prompt-sync")();

var a = prompt("Enter the value of a :");
var b = prompt("Enter the value  of b :");
if (a == b) {
    console.log(" use of double == operator");
} 
 if (a === b) {
    console.log("Use of === operator");
}