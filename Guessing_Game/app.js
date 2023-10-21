let maxNum = parseInt(prompt("Enter a high number"));
while(!maxNum) {
  prompt("Enter a valid number or press 'q' to quit")
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
    
  }
}