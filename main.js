const userChoice = alert(promt("How many rounds do you want to play?"));
let randomNum = math.floor(math.random()*3);
const playerChoice = alert(promt("Do you pick rock, paper, or scissors (enter r, p, or s)"));

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
} else if ((playerChoice, computerChoice)) {
    alert("You won!")
} else {
    alert("Sorry, Computer Wins!")
}