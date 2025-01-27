"use strict";
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('message').textContent = 'Correct Number🎉';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 5;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // this is also called state variable ,it is not dependent on DOM
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no guess
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ no Number";
  }
  //when palyer wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😞 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
  //to loq
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😞 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }

  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#220b0b";
    document.querySelector(".number").style.width = "15rem";
  });
});
