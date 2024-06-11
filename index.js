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
        getHumanChoice();
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

function playGame(){
    let i;
    let computerScore = 0;
    let humanScore = 0;
    for(i=0;i<5;i++){
        console.log(`Round ${i+1}: `)
        let computerChoice = getComputerChoice();
        console.log(`Computer's choice: ${computerChoice}`)
        let humanChoice = getHumanChoice();
        console.log(`Your choice: ${humanChoice}`)
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
    }
    return [computerScore, humanScore]
}


let result = playGame()
let computerScore = result[0];
let humanScore = result[1];
console.log(`COMPUTER'S FINAL SCORE: ${computerScore}`);
console.log(`YOUR FINAL SCORE: ${humanScore}`);
if(computerScore>humanScore){
    console.log("FINAL RESULT: COMPUTER WINS THE GAME!");
}
else if(humanScore>computerScore){
    console.log("FINAL RESULT: YOU WON THE GAME!");
}
else{
    console.log("FINAL RESULT: IT'S A TIE!");
}



