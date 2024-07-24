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

console.log(getHumanChoice());

