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
