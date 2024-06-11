function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors']
    selectedChoice = choices[Math.floor(Math.random()*3)]
    return selectedChoice
}


computerChoice = getComputerChoice()
