let computerCurrentScore = 0;
let playerCurrentScore = 0;
let playerChoice = 0;
let compChoice = 0;

function playGame() {

    playRound(playerChoice, compChoice);
    updateScoreBoard();

    if (playerCurrentScore == 5 || computerCurrentScore == 5) {
        announceWinner();
        computerCurrentScore = 0;
        playerCurrentScore = 0;
        
    }

    
     
  

    
}
/** plays a round based on return values of getComputerChoice and getPlayerChoice */
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {

        computerCurrentScore++;
        playerCurrentScore++;

    }
    
    if ((playerSelection == "Rock" && computerSelection =="Paper") || 
        (playerSelection == "Paper" && computerSelection =="Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Rock")) {

            computerCurrentScore++;

        }

    if ((playerSelection == "Rock" && computerSelection =="Scissors") || 
        (playerSelection == "Paper" && computerSelection =="Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {

            playerCurrentScore++;
        }        
}
/**Randomly chooses and returns a value from the 3 possible choices */
function getComputerChoice() {

    const compChoice = ["Rock", "Paper", "Scissors"];
    return compChoice[Math.floor(Math.random()*compChoice.length)]

}
/**Asks user for an input and returns the value if it meets the requirements

function getPlayerChoice() {

    while (true) {        
        let playerChoice = String(prompt("Enter your choice:"));
        if (["rock", "paper", "scissors"].includes(playerChoice.toLowerCase())) {
            return playerChoice.charAt(0).toLocaleUpperCase() + playerChoice.slice(1);
            break;
        } else {
            console.log("Wrong input, try again!")
        }
    }
}
*/


document.getElementById("playerbuttons").addEventListener("click", function(e) {
    
    /*Sets playerChoice based on clicked button*/
    playerChoice = e.target.id;

    /*Randomly assigns a value to compChoice */
    compChoice = getComputerChoice();

    
    playGame();
    
    

    

   
});

/**Updates scoreboard by adding the value of playerCurrentScore and computerCurrentScore to the scoreboard <div> */
function updateScoreBoard() {

    const playerScoreDiv = document.getElementById("playerscore");
    const compScoreDiv = document.getElementById("computerscore");   

    playerScoreDiv.innerHTML = playerCurrentScore;
    compScoreDiv.innerHTML = computerCurrentScore;

    
}

function announceWinner() {

    const winnerDiv = document.getElementById("winner");
    if (computerCurrentScore === 5 && playerCurrentScore === 5) {
        
        winnerDiv.innerHTML = "Draw!"      

    }

    if (computerCurrentScore === 5) {

        winnerDiv.innerHTML = "You Lose!"
    }

    if (playerCurrentScore === 5) {
        
        winnerDiv.innerHTML = "You win!"
    }

    
}










