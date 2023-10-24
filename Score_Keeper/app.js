//console.log('testing')

const scoreboard = document.querySelector('#scoreBoard');
const scoreboard1 = document.querySelector('#player1Score');
const scoreboard2 = document.querySelector('#player2Score');
const btnPlayer1 = document.querySelector('#player1');
const btnPlayer2 = document.querySelector('#player2');
const btnReset = document.querySelector('#reset');
const playingTo = document.querySelector('#playingTo');


let player1Score = 0;
let player2Score = 0;
let winningScore = 5;
let isGameOver = false;

if (player1Score === winningScore || player2Score === winningScore) {
  isGameOver = true
}

function reset() {
  isGameOver = false
  player1Score = 0;
  player2Score = 0;
  updateScore();
  scoreboard1.classList.remove('winner', 'loser');
  scoreboard2.classList.remove('winner', 'loser');
}

function updateScore() {
  scoreboard1.innerText = `${player1Score}`;
  scoreboard2.innerText = `${player2Score}`;
}

btnReset.addEventListener('click', reset)

playingTo.addEventListener('change', function () {
  winningScore = parseInt(playingTo.value);
})

btnPlayer1.addEventListener('click', function () {
  if (!isGameOver) {
    player1Score++;
    updateScore();
    console.log(typeof(playingTo.value))
    if (player1Score === winningScore) {
      isGameOver = true;
      scoreboard1.classList.add('winner');
      scoreboard2.classList.add('loser');
    }
  }
})

btnPlayer2.addEventListener('click', function () {
  if (!isGameOver) {
    player2Score++;
    updateScore();
    if (player2Score === winningScore) {
      isGameOver = true
      scoreboard1.classList.add('loser');
      scoreboard2.classList.add('winner');
    }
  }
})


