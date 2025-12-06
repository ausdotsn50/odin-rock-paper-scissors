// Global var
let humanScore = 0;
let computerScore = 0;

const computerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    // console.log(choice);
    return choice === 0 ? "rock" : choice === 1 ? "paper" : choice === 2 ? "scissor" : undefined;
}

const getHumanChoice = () => { 
    const response = prompt("rock, paper, or scissor?");
    return response !== null ? response.toLowerCase() : "";
}

const pickWinner = (human, comp) => human>comp ? "Human wins!" : comp>human? "Computer wins!" : "It's a tie!";

// Play a round
function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log("Tie");
    } else if ( humanChoice === "rock" && computerChoice == "paper" || 
                humanChoice === "paper" && computerChoice === "scissor" ||
                humanChoice === "scissor" && computerChoice === "rock") {
                    
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    } else {
        console.log("You Win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }

    console.log("Score Tally\nHuman: " + humanScore + "\nComputer: " + computerScore);
}

function playGame() {
    let hc, cc;
    for(let i=0; i <5; i++) {
        hc = getHumanChoice(); cc = computerChoice();
        console.log("Human: ", hc);
        console.log("Computer: ", cc);
        playRound(hc, cc)
    }
    console.log(pickWinner(humanScore, computerScore));
}

playGame();

// console.log(["rock", "paper", "scissors"].length)
// Play 5 rounds of Rock, Paper, Scissor

