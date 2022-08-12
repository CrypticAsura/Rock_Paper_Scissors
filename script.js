//Function for computer to pick a hand
//Function for player to pick a hand
//Funciton for evaluation

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3) +1;
    let hand = (choice == 1) ? "rock":(choice ==2) ? "paper":"scissors";
    return hand;
}
console.log(getComputerChoice());