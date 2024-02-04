const prompt = require("prompt-sync")();

let str = prompt("Enter the string");

// To fond length of string 
console.log(str.length);
// TO convert the string into uppercase
console.log(str.toUpperCase());
// To convert strung into lowercase
console.log(str.toLowerCase());
// TO remove all the leading and trailing space from beginning
console.log(str.trim());
// To replace the element from string
str = prompt("Enter the string");
console.log(str.replace("lo", "p"));
// joining the two or more then two string by using these two types.
let str2 = "hinduo ka";
let res1 = str.concat(str2, " jai");
let res2 = str2 + str + "kro"
console.log(res1);
console.log(res2);
// presenting the piece of string
console.log(res2.slice(5));
