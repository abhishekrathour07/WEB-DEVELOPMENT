
const prompt = require("prompt-sync")();

var cel = parseFloat(prompt("Enter your body tempreture in Celcius: "));
var far = (9 / 5) * cel + 32;
console.log("Your body tempreture in Farenheit is " + far);

if ( cel < 36.50) {
    console.log("Your body tempreture is Low");
}
else if (cel >= 36.5 && cel <= 37.5) {
    console.log("Your body tempreture is Moderate");
}
else if (cel >= 37.5 ) {
    console.log("Your body tempreture is High");
}
