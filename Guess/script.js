'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!'
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number') = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when ther is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }

  //   When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  }

  //    when guess is too high
  else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '.Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '.Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
