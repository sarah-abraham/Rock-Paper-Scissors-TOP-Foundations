let choices = ['ROCK', 'PAPER', 'SCISSORS']
function getComputerChoice(){
    selectedComputerChoice = choices[Math.floor(Math.random()*3)];
    return selectedComputerChoice
}

function getHumanChoice(){
    let selectedHumanChoice = prompt("ENTER ROCK, PAPER OR SCISSORS: ").toUpperCase();
    if(selectedHumanChoice==='SCISSOR'){
        selectedHumanChoice = 'SCISSORS';
    }
    if(!choices.includes(selectedHumanChoice)){
        console.log("Invalid choice");
        getHumanChoicee();
    }
    return selectedHumanChoice
}

function playRound(humanChoice, computerChoice){
    let flag = 0;
    if(humanChoice == 'ROCK' && computerChoice == 'PAPER'){
        console.log("You lose! Paper beats rock. ");
    } 
    else if(humanChoice == 'SCISSORS' && computerChoice == 'ROCK'){
        console.log("You lose! Rock beats scissors.");
    }
    else if(humanChoice == 'PAPER' && computerChoice == 'SCISSORS'){
        console.log("You lose! Scissors beats paper.");
    }
    else if(humanChoice==computerChoice){
        console.log("It's a tie!");
        flag = 2;
    }
    else{
        console.log("You win!");
        flag = 1;
    }
    return flag
}

let computerChoice = getComputerChoice();
console.log(`Computer's choice: ${computerChoice}`)
let humanChoice = getHumanChoice();
let computerScore = 0;
let humanScore = 0;
let winner = playRound(humanChoice, computerChoice);
if(winner==0){
    computerScore++;
    console.log(`Computer's score: ${computerScore}`);
    console.log(`Your score: ${humanScore}`);
}
else if(winner==2){
    computerScore++;
    humanScore++;
    console.log(`Computer's score: ${computerScore}`);
    console.log(`Your score: ${humanScore}`);
}
else{
    humanScore++;
    console.log(`Computer's score: ${computerScore}`);
    console.log(`Your score: ${humanScore}`);
}


