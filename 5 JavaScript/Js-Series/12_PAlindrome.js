let prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter the number to check palindrome"));
let Num = num;
let rev = 0;
let rem;
while (num !== 0) {
    rem = num % 10;
    rev = (rev * 10) + rem
    num = Math.floor(num / 10)
}
if (Num === rev)
    console.log('palindrome');
else
    console.log('not a palindrome');