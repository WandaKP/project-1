const userChoice = promt("How many rounds do you want to play?");
let randomNum = math.floor(math.random()*3);
const playerChoice = promt("Do you pick rock, paper, or scissors (enter r, p, or s)");

const playerWins (playerChoice, computerChoice) {
    if (playerChoice === ("r")) {
        return computerChoice === ("s")
    } else if (playerChoice === ("p")) {
        return computerChoice === ("r")
    } else {
        return computerChoice === ("p")
    }
}

let computerChoice;
if (randomNum == 0) {
    computerChoice = "r";
} else if (randomNum == 1) {
        computerChoice = "p";
    }
else {
    computerChoice = "s"
}

if (playerChoice === computerChoice) {
    alert("It's a draw!")
} else if (playerWins(playerChoice, computerChoice)) {
    alert("You won!")
} else {
    alert("Sorry, Computer Wins!")
}