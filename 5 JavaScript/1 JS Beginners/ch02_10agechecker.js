const prompt =  require("prompt-sync")();

let age = parseInt(prompt("Enter your age"));

if(age<=20 && age>=10){
    console.log("your age is between 10 and 20");
}
else{
    console.log("your age is either greater then 20 or less then 10");
}
