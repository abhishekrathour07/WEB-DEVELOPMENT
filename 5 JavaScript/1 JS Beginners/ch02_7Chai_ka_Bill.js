var arr = ["Rohit", "Dyna", "Nitish", "Abhishek", "Shashi", "Devang", "ayush"];
var length = arr.length;
var rand = Math.floor(Math.random() * length);

if (arr.includes(arr[rand])) {
    console.log(arr[rand] + " is going to pay bill today!");

}
