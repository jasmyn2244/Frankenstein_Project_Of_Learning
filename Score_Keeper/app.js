//console.log('testing')

const score = document.querySelector('#score');
const btnPlayer1 = document.querySelector('#player1');
const btnPlayer2 = document.querySelector('#player2');
const btnReset = document.querySelector('#reset');
const playingTo = document.querySelector('#playingTo');


let player1Score = 0
let player2Score = 0
let gameOver = false


btnReset.addEventListener('click', function () {
  player1Score = 0;
  player2Score = 0;
})

function updateScore() {
  score.innerText = `${player1Score} to ${player2Score}`;
}

while(player1Score < playingTo.value && player2Score < playingTo.value) {
btnPlayer1.addEventListener('click', function () {
  player1Score++;
  updateScore();
})

btnPlayer2.addEventListener('click', function () {
  player2Score++;
  updateScore();
})
}

if(player1Score > player2Score) {
  player1Score.classList('winner');
  player2Score.classList('loser');
} else {
  player1Score.classList('winner');
  player2Score.classList('loser');
}


