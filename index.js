let choices = ['ROCK', 'PAPER', 'SCISSORS']
function getComputerChoice(){
    selectedComputerChoice = choices[Math.floor(Math.random()*3)];
    return selectedComputerChoice
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

function playGame(humanChoice){
        let i;
        let computerScore = 0;
        let humanScore = 0;
        let computerInputContainer = document.querySelector(".computer-input");
        computerInputContainer.removeChild(computerInputContainer.firstChild);
        let computerChoiceDisplayElement = document.createElement("p");
        
        let computerChoice = getComputerChoice();
        console.log(`Computer's choice: ${computerChoice}`)
        
        computerChoiceDisplayElement.textContent = computerChoice;
        
        computerInputContainer.appendChild(computerChoiceDisplayElement);
        let winner = playRound(humanChoice, computerChoice);
        if(winner==0){
            computerScore++;
        }
        else if(winner==2){
            computerScore++;
            humanScore++;
        }
        else{
            humanScore++;
    }
    return [computerScore, humanScore]
}

const rockHumanSelection = document.querySelector(".rock-button");
const paperHumanSelection = document.querySelector(".paper-button");
const scissorsHumanSelection = document.querySelector(".scissors-button");
let selectedHumanChoice = "";
let count = 0;
let computerScore = 0, humanScore = 0;
const instructionsContainer = document.querySelector(".instructions");
const roundDetails = document.createElement("p");
roundDetails.textContent = `Round ${count + 1}`;
instructionsContainer.appendChild(roundDetails);

const humanScoreCardContainer = document.querySelector(".human-score-card");
const computerScoreCardContainer = document.querySelector(".computer-score-card");
const humanScoreElement = document.createElement("p");
const computerScoreElement = document.createElement("p");
humanScoreElement.textContent = 0;
computerScoreElement.textContent = 0;
humanScoreCardContainer.appendChild(humanScoreElement);
computerScoreCardContainer.appendChild(computerScoreElement);

const resultContainer = document.querySelector(".result");
const resultText = document.createElement("p");

function executeOnClick(selectedHumanChoice){
    if(count>=5){
        location.reload();
    }
    else{
        count++;
        console.log(`Round ${count + 1}: `);
        instructionsContainer.removeChild(roundDetails);
        roundDetails.textContent = `Round ${count + 1}`;
        instructionsContainer.appendChild(roundDetails);


        let result = playGame(selectedHumanChoice);
        console.log(result)
        computerScore = computerScore + result[0];
        humanScore = humanScore+result[1];

        humanScoreCardContainer.removeChild(humanScoreElement);
        computerScoreCardContainer.removeChild(computerScoreElement);
        humanScoreElement.textContent = humanScore;
        computerScoreElement.textContent = computerScore;
        humanScoreCardContainer.appendChild(humanScoreElement);
        computerScoreCardContainer.appendChild(computerScoreElement);

        if(count==5){
            console.log(`COMPUTER'S FINAL SCORE: ${computerScore}`)
            console.log(`YOUR FINAL SCORE: ${humanScore}`)
            if(computerScore>humanScore){
                resultText.textContent = "FINAL RESULT: COMPUTER WINS THE GAME! REFRESH THE PAGE TO PLAY AGAIN";
            }
            else if(humanScore>computerScore){
                resultText.textContent = "FINAL RESULT: YOU WON THE GAME! REFRESH THE PAGE TO PLAY AGAIN";
            }
            else{
                resultText.textContent ="FINAL RESULT: IT'S A TIE! REFRESH THE PAGE TO PLAY AGAIN";
            }
            resultContainer.appendChild(resultText)
            instructionsContainer.removeChild(roundDetails)
        }
    
    }
    
}


rockHumanSelection.addEventListener('click', () => executeOnClick("ROCK"))
paperHumanSelection.addEventListener('click', () => executeOnClick("PAPER"))
scissorsHumanSelection.addEventListener('click', () => executeOnClick("SCISSORS"))