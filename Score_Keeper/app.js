//console.log('testing')

const scoreboard = document.querySelector('#scoreBoard');
const scoreboard1 = document.querySelector('#player1Score');
const scoreboard2 = document.querySelector('#player2Score');
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
  updateScore();
})

// function updateScore() {
//   scoreboard.innerText = `${player1Score} to ${player2Score}`;
// }

function updateScore() {
  scoreboard1.innerText = `${player1Score}`;
  scoreboard2.innerText = `${player2Score}`;
}

//while(player1Score < playingTo.value && player2Score < playingTo.value) {

btnPlayer1.addEventListener('click', function () {
  console.log(playingTo.value)
  player1Score++;
  updateScore();
})

btnPlayer2.addEventListener('click', function () {
  player2Score++;
  updateScore();
})
//}

// if(player1Score > player2Score) {
//   player1Score.classList.add('winner');
//   player2Score.classList.add('loser');
// } else {
//   player1Score.classList.add('winner');
//   player2Score.classList.add('loser');
// }


