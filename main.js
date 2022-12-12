let ties = 0
let wins = 0
let losses = 0
const rounds = prompt("How many rounds do you want to play?");
let randomNum = Math.floor(Math.random()*3);
const playerChoice = prompt("Do you pick rock, paper, or scissors (enter r, p, or s)");

let computerChoice;
if (randomNum == 0) {
    computerChoice = "r";
} else if (randomNum == 1) {
        computerChoice = "p";
    } else {
    computerChoice = "s"
}

if (playerChoice === computerChoice) {
    alert("It's a draw!")
    ties++
} else if (playerChoice === 'r' && computerChoice === 's') {
    alert("You won!")
    wins++
} else if (playerChoice === 'p' && computerChoice === 'r') {
    alert("You won!")
    wins++
} else if (playerChoice === 's' && computerChoice === 'p'){
    alert("You won!")
    wins++
} else {
    alert("Sorry, Computer Wins!")
    losses++
}

for (i = 0; i < rounds.length; i++) {
    
}

alert("You won " + wins + " times, you tied " + ties + " times, you lost " + losses + " times")