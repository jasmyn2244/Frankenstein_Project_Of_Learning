//console.log('testing')

const scoreboard = document.querySelector('#scoreBoard');
const btnReset = document.querySelector('#reset');
const playingTo = document.querySelector('#playingTo');

let winningScore = 5;
let isGameOver = false;

const p1 = {
  score: 0,
  button: document.querySelector('#player1'),
  scoreboard: document.querySelector('#player1Score'),
}

const p2 = {
  score: 0,
  button: document.querySelector('#player2'),
  scoreboard: document.querySelector('#player2Score'),
}

function updatePlayer (player, opponent) {
  if (!isGameOver) {
      player.score++;
      updateScore();
      if (player.score === winningScore) {
        isGameOver = true;
        player.scoreboard.classList.add('winner');
        opponent.scoreboard.classList.add('loser');
        player.button.disabled = true;
        opponent.button.disabled = true;
      }
    }
}

if (player1Score === winningScore || player2Score === winningScore) {
  isGameOver = true
}

function reset() {
  isGameOver = false
  p1.score = 0;
  p2.score = 0;
  updateScore();
  p1.scoreboard.classList.remove('winner', 'loser');
  p2.scoreboard.classList.remove('winner', 'loser');
  p1.button.disabled = false;
  p2.button.disabled = false;
}

function updateScore() {
  p1.scoreboard.innerText = `${p1.score}`;
  p2.scoreboard.innerText = `${p2.score}`;
}

btnReset.addEventListener('click', reset)

playingTo.addEventListener('change', function () {
  winningScore = parseInt(playingTo.value);
})

p1.button.addEventListener('click', function() {
  updatePlayer(p1, p2);
})

p2.button.addEventListener('click', function () {
    updatePlayer(p2, p1);
})


