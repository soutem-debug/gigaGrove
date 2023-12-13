
// Player one rolls 

var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

var randomImageSource = "assets/images/dice" + randomNumber1 + ".png"; 

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);


// Player two rolls 

var randomNumber2 = Math.floor(Math.random()* 6) + 1;

var randomImageSource2 = "assets/images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[2];

image2.setAttribute("src", randomImageSource2);


//  The Game 

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏴‍☠️ Player One Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player Two Wins! 🏴‍☠️";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
