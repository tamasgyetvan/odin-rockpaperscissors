function playRound(playerSelection, computerSelection) {
    

}

function getComputerChoice() {

    const compChoice = ["Rock", "Paper", "Scissors"];
    return compChoice[Math.floor(Math.random()*compChoice.length)]

}

function getPlayerChoice() {

    let playerChoice = String(prompt("Enter your choice:"))

    if (["rock", "paper", "scissors"].includes(playerChoice.toLowerCase())) {
        return playerChoice
    } else {
        console.log("Wrong input, please enter a valid input!")

    }
}






