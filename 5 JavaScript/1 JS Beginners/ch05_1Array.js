const prompt = require("prompt-sync")();

let arr = [];
let n = prompt("Enter the size of an array : ");
console.log("Enter the elements in array");
for (let i = 0; i < n; i++) {
    let element = parseInt(prompt(""));
    arr.push(element);
}
console.log(arr);

for (value of arr) {
    console.log(" = ",value," Index = ",arr);
}