
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImg1 = "images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImg1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImg2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImg2);


if(randomNumber1 > randomNumber2)
{
  document.querySelector(".Result").textContent = "Player1 wins.";
}
else if(randomNumber1 < randomNumber2)
{
  document.querySelector(".Result").textContent = "Player2 wins.";
}
else
{
  document.querySelector(".Result").textContent = "It's a Draw.";
}
