let computerCurrentScore = 0;
let playerCurrentScore = 0;
let playerChoice = 0;
let compChoice = 0;
function playGame() {


    while (computerCurrentScore != 5 || playerCurrentScore != 5) {
        playRound(playerChoice, compChoice);
    }
    
    

    
}
/** plays a round based on return values of getComputerChoice and getPlayerChoice */
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {

        console.log("Draw");
        computerCurrentScore++;
        playerCurrentScore++;

    }
    
    if ((playerSelection == "Rock" && computerSelection =="Paper") || 
        (playerSelection == "Paper" && computerSelection =="Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Rock")) {

            console.log("You Lose!");
            computerCurrentScore++;

        }

    if ((playerSelection == "Rock" && computerSelection =="Scissors") || 
        (playerSelection == "Paper" && computerSelection =="Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {

            console.log("You win!");
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
    
    

    if (e.target.id === "Rock") {
        playerChoice = "Rock";
    } else if (e.target.id === "Paper") {
        playerChoice = "Paper";
    } else {
        playerChoice = "Scissors";
    }

    compChoice = getComputerChoice();
    playRound(playerChoice, compChoice)
    console.log(playerChoice)
    console.log(compChoice)

    const playerScoreDiv = document.getElementById("playerscore");
    const compScoreDiv = document.getElementById("computerscore");

    playerScoreDiv.innerHTML = playerCurrentScore;
    compScoreDiv.innerHTML = computerCurrentScore;
    


    
    
    


    console.log(playerCurrentScore)
    console.log(computerCurrentScore)


    
   
})








