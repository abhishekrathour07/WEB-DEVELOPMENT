const prompt = require("prompt-sync")();

let arr = [];
let n = prompt("Enter the size of an array : ");
for (let i = 0; i < n; i++) {
    let data = parseInt(prompt(`Enter the element in index ${i} `));
    arr[i] = data;
}
console.log(arr);

