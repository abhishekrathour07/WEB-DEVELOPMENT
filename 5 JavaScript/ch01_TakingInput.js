const userInput = require('readline')

const input = userInput.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("Enter the value", (userInput)=>{
    console.log("Hello ",userInput);
    input.close();
})
 