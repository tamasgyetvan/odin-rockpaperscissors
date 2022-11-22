/** plays a round based on return values of getComputerChoice and getPlayerChoice */
function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {

        console.log("Draw");

    }
    
    if ((playerSelection == "Rock" && computerSelection =="Paper") || 
        (playerSelection == "Paper" && computerSelection =="Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Rock")) {

            console.log("You Lose!");
        }

    if ((playerSelection == "Rock" && computerSelection =="Scissors") || 
        (playerSelection == "Paper" && computerSelection =="Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {

            console.log("You win!");
        }        
}
/**Randomly chooses and returns a value from possible choices */
function getComputerChoice() {

    const compChoice = ["Rock", "Paper", "Scissors"];
    return compChoice[Math.floor(Math.random()*compChoice.length)]

}
/**Asks user for an input and returns the value if it meets the requirements*/

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


document.getElementById("playerbuttons").addEventListener("click", function(e) {
    
    let player = e.target.id;
    let comp = getComputerChoice();

    playRound(player, comp)


})






