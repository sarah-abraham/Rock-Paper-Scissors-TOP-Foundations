let choices = ['ROCK', 'PAPER', 'SCISSORS']
function getComputerChoice(){
    selectedComputerChoice = choices[Math.floor(Math.random()*3)]
    return selectedComputerChoice
}

function getHumanChoice(){
    let selectedHumanChoice = prompt("ENTER ROCK, PAPER OR SCISSORS: ").toUpperCase()
    if(!choices.includes(selectedHumanChoice)){
        console.log("Invalid choice")
        getHumanChoicee()
    }
    return selectedHumanChoice
}
computerChoice = getComputerChoice()
humanChoice = getHumanChoice()
