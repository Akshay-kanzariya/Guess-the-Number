'use strict';

// Generating random number between 1-20
let randomNumber = Math.trunc(Math.random() * 20) + 1;

// setting initial stats
let score = 20;
let highScore = 0;

//function to display message
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// adding functionality to the 'check' button
document.querySelector('.check').addEventListener('click', function () {
  //getting the value in the input field as guessed variable
  const guessed = Number(document.querySelector('.guess').value);

  //checking the guessed input value and adding other functionality according to it
  if (!guessed) {
    displayMessage('invalid number');
  } else if (guessed === randomNumber) {
    displayMessage('correct number');
    document.querySelector('.number').textContent = guessed;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessed !== randomNumber) {
    if (score > 1) {
      displayMessage(guessed > randomNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// adding functionality to 'Again' button for playing again and
// setting the values to initial stats except the highscore value
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
