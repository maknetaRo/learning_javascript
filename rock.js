let three = ["scissors", "rock", "paper"]
playAgain = confirm("Welcome to rock-scissors-paper game. Do you want to play?")
won = 0
tie = 0
lost = 0
while (playAgain) {
index = Math.floor(Math.random() * 3)
computerChoice = three[index]

myChoice = prompt("Please choose 'scissors', 'paper' or 'rock'")
alert(`Computer choice is ${computerChoice}.`)
if ((computerChoice === "scissors") && (myChoice === "scissors")) {
  alert("It's a tie!"); tie++;
} else if ((computerChoice === "scissors") && (myChoice === "rock")) {
  alert("You won!"); won++;
} else if ((computerChoice === "scissors") && (myChoice === "paper")) {
  alert("You lost!"); lost++;
} else if ((computerChoice === "rock") && (myChoice === "scissors")) {
  alert("You lost!"); lost++;
} else if ((computerChoice === "rock") && (myChoice === "rock")) {
  alert("It's a tie!"); tie++;
} else if ((computerChoice === "rock") && (myChoice === "paper")) {
  alert("You won!"); won++;
} else if ((computerChoice === "paper") && (myChoice === "scissors")) {
  alert("You won!"); won++;
} else if ((computerChoice === "paper") && (myChoice === "rock")) {
  alert("You lost!"); lost++;
} else if ((computerChoice === "paper") && (myChoice === "paper")) {
  alert("It's a tie!"); tie++;
} playAgain = confirm("Do you want to play again?");
}   alert(`You won ${won} time(s), lost ${lost} time(s) and it was a tie ${tie} times.`)
