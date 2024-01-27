
var random1 = Math.floor(Math.random()*6)+1;
var randomdir1 = "./images/dice"+random1+".png";
var value1 = document.querySelectorAll('img')[0];

value1.setAttribute('src',randomdir1);

var random2 = Math.floor(Math.random()*6)+1;
var randomdir2 = "./images/dice"+random2+".png";
var value2 = document.querySelectorAll('img')[1];

value2.setAttribute('src',randomdir2);

if(random1>random2){
    document.querySelector('h1').innerHTML ="Player1 Wins";
}
else if (random2>random1){
    document.querySelector('h1').innerHTML = "Player2 Wins";
}
else{
    document.querySelector('h1').innerHTML="Draw"
}


