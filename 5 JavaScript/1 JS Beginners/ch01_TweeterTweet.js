const prompt = require("prompt-sync")();
let tweet = prompt("Enter the tweet");
l = tweet.length;
console.log("you have written "+l+" | charcter left "+(140 - l))
let cut = tweet.slice(0,140);
console.log(cut);
