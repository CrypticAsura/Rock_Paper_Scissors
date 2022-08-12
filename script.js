//Function for computer to pick a hand
//Function for player to pick a hand
//Funciton for evaluation

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3) +1;
    let hand = (choice == 1) ? "rock":(choice ==2) ? "paper":"scissors";
    return hand;
}
//console.log(getComputerChoice());
function getPlayerChoice() {
    let hand = prompt("Enter 'rock', 'paper', or 'scissors'");
    if (hand == null) {
        return null
    }
    hand = hand.toLowerCase();
    if (!((hand == "rock") || (hand == "paper") || (hand == "scissors"))) {
        alert("Wrong selection. Try again.")
        return getPlayerChoice();
    }
    return hand;
}

function gameRound(rounds) {
    let winCount = 0;
    for (let i=0; i < rounds; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    if (computerChoice == playerChoice) {
        console.log("This is a tie");
        i--
    } else if (playerChoice == null) {
        console.log("Play the goddamn game!");
        i--
    } else if ((computerChoice == "rock")&&(playerChoice=="scissors")) {
        console.log("You lose!");
    } else if ((computerChoice == "paper")&&(playerChoice=="rock")) {
        console.log("You lose!");
    } else if ((computerChoice == "scissors")&&(playerChoice=="paper")) {
        console.log("You lose!");
    } else {
        console.log("You win!");
        winCount++
    };
    console.log(`You played ${playerChoice} and computer played ${computerChoice}`)
    if (winCount/rounds > .5) {
        console.log(`You've won best out of ${rounds}. Good job.`)
        return;
    } else if ((i+1-winCount)/rounds>.5) {
        console.log("Fucking loser");
        return;
    };
    };
};
gameRound(5);