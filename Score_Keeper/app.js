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

btnReset.addEventListener('click', function () {
  isGameOver = false
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


btnPlayer1.addEventListener('click', function () {
  if (!isGameOver) {
    player1Score++;
    if (player1Score === winningScore) {
      isGameOver = true
    }
    updateScore();
  }

})

btnPlayer2.addEventListener('click', function () {
  if (!isGameOver) {
    player2Score++;
    updateScore();
    if (player2Score === winningScore) {
      isGameOver = true
      scoreboard1.classList.add('winner');
      scoreboard2.classList.add('loser');
    }

  }

})

// btnPlayer2.addEventListener('click', function () {
//   if (!isGameOver) {
//     player2Score++;
//     if (player2Score === winningScore) {
//       isGameOver === true
//       // player1Score.classList.add('winner');
//       // player2Score.classList.add('loser');
//     }
//     updateScore();
//   }
  

// })
//}

// if(player1Score > player2Score) {
//   player1Score.classList.add('winner');
//   player2Score.classList.add('loser');
// } else {
//   player1Score.classList.add('winner');
//   player2Score.classList.add('loser');
// }


