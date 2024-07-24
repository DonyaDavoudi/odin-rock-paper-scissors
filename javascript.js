function getComputerChoice(){
    const min = 1;
    const max = 3;
    const diff = max - min;
    const random = (Math.round(Math.random() * diff + min));
    if(random === 1){
        return "rock";
    } else if(random === 2){
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("Type rock, paper, or scissors");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    console.log(humanChoice);
    console.log(computerChoice);

    if ( humanChoice==="rock" && computerChoice==="paper"){
        console.log("You lose! Paper beats Rock.");
    } else if( humanChoice==="rock" && computerChoice==="scissors"){
        console.log("You win! Rock beats Scissors");
    }  else if(humanChoice==="paper" && computerChoice==="rock"){
        console.log("You win! Paper beats rock.");
    } else if(humanChoice==="paper"&&computerChoice==="scissors"){
        console.log("You lose! Scissors beats paper.");
    } else if(humanChoice==="scissors"&&computerChoice==="paper"){
        console.log("You win! Scissors beats paper.");
    } else if(humanChoice==="scissors"&&computerChoice==="rock"){
        console.log("You lose! Rock beats scissors.");
    } else if( (humanChoice==="rock" && computerChoice==="rock")||
    (humanChoice==="paper" && computerChoice==="paper")||
    (humanChoice==="scissors" && computerChoice==="scissors")){
        console.log("It's a tie.");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

