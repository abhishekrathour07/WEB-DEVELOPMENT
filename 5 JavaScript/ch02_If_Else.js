const prompt = require("prompt-sync")();

var age = prompt("Enter your age : ");

if (age >= 18) {
    console.log("Your age is " + age + " and you are eligible for voting");
}
else {
    console.log("Your age is " + age + " and you are  not eleigible for voting");
}