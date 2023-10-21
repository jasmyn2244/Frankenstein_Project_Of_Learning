let maxNum = parseInt(prompt("Enter a high number"));
while(!maxNum) {
  maxNum = parseInt(prompt("Enter a valid high number or press 'q' to quit"));
}

let targetNum = Math.floor(Math.random() * maxNum) + 1;

console.log(`Target Number: ${targetNum}`);

let guess = prompt("Enter your first guess or type 'q' to quit");

let attempts = 1;

while(parseInt(guess) !== targetNum) {
  if(guess === 'q') break; 
  if(guess > targetNum) {
    guess = prompt("That's too high, guess again") 
    attempts++
  } else if(guess < targetNum) {
    guess = prompt("That's too low, guess a gain")
    attempts++
  } else {
    guess = prompt("Enter a valid number or type 'q' to quit")
  }
}

if(guess === 'q') {
  console.log("Ok, you quit. Hit refresh to start a new game")
} else {
  console.log(`CONGRATS! You guessed the correct number! It took you ${attempts} guesses`)
}
