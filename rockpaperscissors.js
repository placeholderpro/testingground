let computerSelection;
let computerScore = 0;
let playerScore = 0;

function generateSelection() {
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum == 0){
        computerSelection = 'rock';
    }
    if (randomNum == 1){
        computerSelection = 'paper';
    }
    if (randomNum == 2){
        computerSelection = 'scissors';
    }
}

function select() { 
    console.log('Choose Rock, Paper or Scissors');
    let selectionInput = prompt('Rock, Paper or Scissors?');
    selection = selectionInput.toLowerCase();
    validateWord();
}

function validateWord() {
    if ((selection !== 'rock') && (selection !== 'paper') && (selection !== 'scissors')){
        console.log(selection + " is not a valid choice!");
        select();
    }
}

function judge() {
    if (
        (computerSelection == 'rock' && selection == 'scissors') 
        || (computerSelection == 'paper' && selection == 'rock') 
        ||(computerSelection == 'scissors' && selection == 'paper')
    ){
        console.log('You lose!');
        computerScore++
        return
    }
    if (
        (computerSelection == 'rock' && selection == 'paper') 
        || (computerSelection == 'paper' && selection == 'scissors') 
        ||(computerSelection == 'scissors' && selection == 'rock')
    ){
        console.log('You win!');
        playerScore++
        return
    }
    else (
        console.log('Draw!')
    )  
}

function game(){

    select();
    validateWord();
    console.log("You chose " + selection + ".");
    generateSelection();
    console.log("I chose " + computerSelection + ".");
    judge();
    console.log("Score is player: " + playerScore + " computer: " + computerScore);
}

while ((playerScore < 5) && (computerScore < 5)){
    game();
    if (playerScore == 5) {
        console.log("You win the whole shebang!");
    }
    if (computerScore == 5) {
        console.log("I win the whole shebang!");
    }
}