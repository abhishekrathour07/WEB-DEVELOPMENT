let tweet = prompt("Enter the tweet");
l = tweet.length;
alert("you have written "+l+" | charcter left "+(140 - l))
let cut = tweet.slice(0,140);
alert(cut);
