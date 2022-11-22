function game() {
    for (let i = 0; i<5; i++) {

        let x = getPlayerChoice();
        let y = getComputerChoice();

        console.log("Player choice: " + x);
        console.log("Computer Choice: " + y);

        playRound(x,y);
       
    }
}





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

function getComputerChoice() {

    const compChoice = ["Rock", "Paper", "Scissors"];
    return compChoice[Math.floor(Math.random()*compChoice.length)]

}

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

game();







