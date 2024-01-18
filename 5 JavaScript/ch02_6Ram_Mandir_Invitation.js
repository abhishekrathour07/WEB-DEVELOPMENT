const prompt = require("prompt-sync")();

var invitationList = ["yogi adityanath", "Modi ji", "Virat Kohli", "Rohit sherma", "Ambani", "Amitabh bacchan"];
var name = prompt("Enter youir name  to check : ");

if (name = invitationList) {
    console.log("Welcome you are invited");
}
else {
    console.log("You are not invited but you can come anytime after 22 jan bcz 'Ram Sabke Hai'");
}
 var l = invitationList.length;
 console.log(l);