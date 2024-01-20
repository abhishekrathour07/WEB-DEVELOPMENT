var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomSource1 = "./images/dice" + randomNumber1 + ".png";

var value1 = document.querySelectorAll("img")[0];
value1.setAttribute("src",randomSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomSource2 =  "./images/dice"+randomNumber2+".png";

var value2 = document.querySelectorAll("img")[1];
value2.setAttribute("src",randomSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 wins !";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 wins !";

}
else{
    document.querySelector("h1").innerHTML = "Match Draw "
}
